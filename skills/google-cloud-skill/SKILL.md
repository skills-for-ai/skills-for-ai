---
name: google-cloud-skill
description: Use when asked to write or debug Google Cloud Platform (GCP) infrastructure (gcloud CLI, Terraform against GCP), choose a compute/storage/database service, configure IAM, or explain GCP-specific concepts (projects, resource hierarchy, VPCs) — independent of any specific application framework.
---

# Google Cloud (GCP) Skill

Google Cloud Platform is Google's cloud platform, organized around a
**resource hierarchy** (Organization → Folders → Projects → Resources) that
is more explicitly hierarchical by default than AWS's account/region model,
and known for services drawing directly on Google's own internal
infrastructure (BigQuery's Dremel/Colossus lineage, Kubernetes originating
from Google's internal Borg).

## Resource hierarchy and projects

- **Organization** (root, tied to a domain) → **Folders** (optional grouping,
  e.g. per business unit) → **Projects** (the actual container for
  resources and billing) → **Resources** (VMs, buckets, etc.).
- Every resource belongs to exactly one **Project**, identified by a
  globally-unique project ID — this is the unit most IAM bindings, quotas,
  and billing attach to, roughly analogous to (but stricter than) an AWS
  account.
- IAM policies and organization policies **inherit down** the hierarchy —
  a policy set at the Organization or Folder level applies to every Project
  beneath it unless explicitly overridden.

## Identity and access: IAM

```sh
gcloud projects add-iam-policy-binding my-project \
  --member="user:alice@example.com" \
  --role="roles/storage.objectViewer"
```

- GCP IAM roles come in three kinds: **basic** (Owner/Editor/Viewer —
  broad, legacy, generally too coarse for production use), **predefined**
  (curated per-service roles like `roles/storage.objectViewer`), and
  **custom** (org-defined, assembled from individual permissions).
  Predefined roles are the usual default; reach for custom only when no
  predefined role fits the actual need.
- A **service account** is an identity for a workload (not a person) — used
  by a Compute Engine VM, a Cloud Run service, or a CI pipeline to call
  other GCP APIs without embedding a person's credentials.

## Core service map (by category, not exhaustive)

| Category | Common services |
| --- | --- |
| Compute | Compute Engine (VMs), Cloud Run (serverless containers), GKE (managed Kubernetes), Cloud Functions (serverless functions) |
| Storage | Cloud Storage (object storage), Persistent Disk (block storage) |
| Database | Cloud SQL (managed Postgres/MySQL/SQL Server), Spanner (globally-distributed, strongly-consistent SQL), Firestore/Bigtable (NoSQL) |
| Data & analytics | BigQuery (serverless data warehouse), Dataflow (stream/batch processing), Pub/Sub (messaging) |
| Networking | VPC, Cloud Load Balancing, Cloud DNS, Cloud CDN |
| Identity/security | Cloud IAM, Secret Manager, Cloud KMS |
| AI/ML | Vertex AI (the unified ML platform, including Gemini API access) |

## Infrastructure as code and CLI

```sh
gcloud auth login
gcloud config set project my-project
gcloud compute instances list
```

```hcl
# Terraform (the most common IaC tool for GCP; there's no CloudFormation-equivalent GCP-native templating language in wide use)
resource "google_storage_bucket" "example" {
  name     = "my-bucket"
  location = "US"
}
```

Unlike AWS, GCP doesn't have an equally dominant native declarative
templating service — **Terraform** is the de facto standard for GCP
infrastructure as code in most organizations, alongside Google's own
**Deployment Manager** (older) and **Config Connector** (for managing GCP
resources via Kubernetes-style YAML from within GKE).

## Distinctive capabilities

- **BigQuery** — a serverless data warehouse queried with standard SQL,
  billed by data scanned (or a flat-rate slot model), with no cluster to
  size or manage — a genuinely different operational model than a
  self-managed data warehouse.
- **Cloud Spanner** — a globally distributed relational database offering
  strong consistency and horizontal scalability together, a combination
  most relational databases don't attempt.
- **GKE Autopilot** — a Kubernetes mode where Google manages node
  provisioning/sizing entirely, billing per-pod-resource rather than
  per-node, distinct from the "standard" mode where you manage the node
  pool yourself.
- **Live migration** for Compute Engine VMs — Google can migrate a running
  VM off hardware scheduled for maintenance without a reboot, unlike a
  typical VM host's maintenance-window restart requirement.

## Common pitfalls

- **Using Basic roles (Owner/Editor/Viewer) in production** — far broader
  than almost any real need; use predefined or custom roles scoped to the
  actual task.
- **A service account key file (JSON) committed to source control** —
  prefer workload identity federation or attaching a service account
  directly to the compute resource, avoiding a long-lived downloadable key
  entirely where possible.
- **Assuming IAM policy at the Project level is the only place to check**
  — an inherited Organization- or Folder-level policy/deny rule can be the
  actual reason a permission isn't working as expected.
- **Confusing GCP's Project ID with its Project Name/Number** — the ID is
  what's globally unique and used in most API calls/URLs; the display name
  is not guaranteed unique and isn't a valid identifier in most contexts.
- **Underestimating BigQuery cost from an unbounded `SELECT *`** — since
  billing is per-byte-scanned in on-demand pricing, querying unneeded
  columns/partitions on a large table has a direct cost impact that a
  traditional indexed database wouldn't.

## Learn more

- [Google Cloud documentation](https://cloud.google.com/docs)
- [Google Cloud Architecture Framework](https://cloud.google.com/architecture/framework) — the canonical cross-cutting best-practices reference.
- [gcloud CLI reference](https://cloud.google.com/sdk/gcloud/reference)
- [Terraform Google provider docs](https://registry.terraform.io/providers/hashicorp/google/latest/docs)
