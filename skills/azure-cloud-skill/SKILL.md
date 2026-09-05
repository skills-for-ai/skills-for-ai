---
name: azure-cloud-skill
description: Use when asked to write or debug Microsoft Azure infrastructure (Azure CLI, ARM/Bicep/Terraform against Azure), choose a compute/storage/database service, configure Azure AD/RBAC, or explain Azure-specific concepts (resource groups, subscriptions, management groups) — independent of any specific application framework.
---

# Microsoft Azure Cloud Skill

Azure is Microsoft's cloud platform, organized around **resource groups**
as the primary unit of lifecycle management, and notable for its deep
integration with Microsoft's existing enterprise identity/directory stack
(Entra ID, formerly Azure Active Directory) and .NET tooling.

## Resource hierarchy

**Management Groups** (optional, for organizing multiple subscriptions) →
**Subscriptions** (the billing/quota boundary, roughly analogous to an AWS
account or GCP project) → **Resource Groups** (a logical container for
resources that share a lifecycle) → **Resources**.

A **Resource Group** is Azure's most distinctive organizational idea versus
AWS/GCP — resources are typically deployed, managed, and deleted together
as a group (deleting a resource group deletes everything in it), which
makes it a natural unit for "one environment" or "one application's
infrastructure" rather than a purely cosmetic label.

## Identity and access: Entra ID and RBAC

```sh
az role assignment create \
  --assignee alice@example.com \
  --role "Storage Blob Data Reader" \
  --scope /subscriptions/.../resourceGroups/my-rg
```

- **Microsoft Entra ID** (formerly Azure Active Directory) is Azure's
  identity provider — the same directory used for Microsoft 365 in many
  organizations, which is why Azure identity work often intersects with an
  organization's existing enterprise directory rather than being a
  cloud-only concern.
- **Azure RBAC** assigns built-in or custom **roles** at a chosen
  **scope** (management group, subscription, resource group, or a single
  resource) — permissions inherit downward, the same general shape as
  GCP's hierarchy, distinct from AWS's flatter per-resource policy
  attachment model.
- A **Managed Identity** (system-assigned or user-assigned) is Azure's
  equivalent of an AWS IAM role or GCP service account — an identity a
  resource (a VM, a Function App) uses to call other Azure services without
  embedded credentials.

## Core service map (by category, not exhaustive)

| Category | Common services |
| --- | --- |
| Compute | Virtual Machines, Azure Functions (serverless), AKS (managed Kubernetes), App Service (managed web app hosting) |
| Storage | Blob Storage (object storage), Azure Files, managed Disks |
| Database | Azure SQL Database (managed SQL Server engine), Azure Database for PostgreSQL/MySQL, Cosmos DB (globally-distributed multi-model NoSQL) |
| Networking | Virtual Network (VNet), Azure Front Door/CDN, Azure DNS, Application Gateway |
| Identity/security | Microsoft Entra ID, Azure RBAC, Key Vault |
| Messaging/integration | Service Bus, Event Grid, Event Hubs |
| Observability | Azure Monitor, Application Insights, Log Analytics |

## Infrastructure as code and CLI

```sh
az login
az group create --name my-rg --location eastus
az vm list --output table
```

```bicep
// Bicep (Azure's newer, more concise native IaC language)
resource storageAccount 'Microsoft.Storage/storageAccounts@2023-01-01' = {
  name: 'mystorageacct'
  location: 'eastus'
  sku: { name: 'Standard_LRS' }
  kind: 'StorageV2'
}
```

**ARM templates** (JSON) are Azure's original native IaC format; **Bicep**
is a newer, more readable domain-specific language that compiles down to
ARM JSON and is now the generally-recommended native option. **Terraform**
is also widely used for Azure, especially in organizations standardizing
one IaC tool across multiple cloud providers.

## Distinctive capabilities

- **Resource Groups as a lifecycle unit** — deleting one resource group
  reliably tears down everything deployed together in it, a cleanup
  guarantee that AWS/GCP don't offer as directly at the platform level.
- **Cosmos DB's multi-model, multi-consistency design** — one service
  exposes multiple APIs (SQL/Core, MongoDB-compatible, Cassandra-compatible,
  Gremlin graph, table) over the same underlying globally-distributed
  storage, with a choice of five consistency levels rather than a single
  fixed model.
- **Hybrid/on-premises integration** — Azure Arc and Azure Stack extend
  Azure management (including RBAC and policy) to on-premises or
  other-cloud resources, reflecting Azure's enterprise/hybrid-first
  positioning more than AWS or GCP typically emphasize.
- **Deep first-party .NET and Windows Server integration** — while Azure
  supports the same broad language ecosystem as other clouds, its App
  Service, Functions, and Visual Studio tooling have historically had the
  tightest first-party .NET workflow of the three major clouds.

## Common pitfalls

- **Treating "subscription" and "resource group" as interchangeable** — a
  subscription is the billing/quota boundary; a resource group is a
  lifecycle grouping within it. Confusing the two leads to misplaced
  expectations about where a quota or a bulk-delete actually applies.
- **Broad RBAC scope out of convenience** (assigning a role at the
  subscription level when a single resource group would do) — inherits
  down further than intended and is harder to audit later.
- **A Key Vault access policy or RBAC assignment mismatch** — Key Vault
  historically supports both a legacy "access policy" model and RBAC for
  controlling access; mixing assumptions about which model is active on a
  given vault is a common source of "permission denied" surprises.
- **Not accounting for region/service availability gaps** — not every
  Azure service is available in every region at the same time; check
  regional availability before assuming a service can be deployed
  wherever a resource group happens to live.
- **Assuming Bicep and ARM are different systems** — Bicep is a syntax
  layer that compiles to ARM JSON; anything expressible in ARM is
  reachable from Bicep, and errors often surface in terms of the
  underlying ARM template.

## Learn more

- [Microsoft Azure documentation](https://learn.microsoft.com/en-us/azure/)
- [Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/) — the canonical cross-cutting best-practices reference.
- [Azure CLI reference](https://learn.microsoft.com/en-us/cli/azure/), [Bicep documentation](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/)
- [Terraform AzureRM provider docs](https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs)
