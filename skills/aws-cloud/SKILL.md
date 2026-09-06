---
name: aws-cloud
description: Use when asked to write or debug AWS infrastructure (CLI, CloudFormation/CDK/Terraform against AWS), choose a compute/storage/database service, configure IAM, or explain AWS-specific concepts (regions/AZs, VPCs, the shared responsibility model) — independent of any specific application framework.
---

# Amazon Web Services (AWS) Cloud

AWS is Amazon's cloud platform — the largest by service breadth and market
share, organized around independently-billed services rather than one
monolithic platform. Its core structural ideas (regions/AZs, IAM,
VPC) recur across nearly every other service.

## Regions, Availability Zones, and global services

- A **Region** is an independent geographic area (e.g. `us-east-1`); an
  **Availability Zone (AZ)** is one or more discrete, isolated datacenters
  within a region with independent power/networking. Spreading resources
  across AZs (not just regions) is the standard way to survive a single
  datacenter failure.
- Most services are region-scoped (you pick a region when creating a
  resource); IAM, Route 53, and CloudFront are notable **global** services
  with no region selection.

## Identity and access: IAM

```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": ["s3:GetObject"],
    "Resource": "arn:aws:s3:::my-bucket/*"
  }]
}
```

- **Users**, **groups**, and **roles** are the core IAM identities;
  **policies** (JSON documents like the one above) attach permissions to
  them. A **role** is assumed temporarily (by a service, another account, or
  federated identity) rather than tied to one person's long-lived
  credentials — the preferred pattern over embedding long-lived access keys
  in application code.
- **Least privilege** is the governing principle: scope a policy's
  `Resource` and `Action` as narrowly as the task requires, rather than
  reaching for a wildcard `"*"` to make an error go away.

## Core service map (by category, not exhaustive)

| Category | Common services |
| --- | --- |
| Compute | EC2 (VMs), Lambda (serverless functions), ECS/EKS (containers), Fargate (serverless containers) |
| Storage | S3 (object storage), EBS (block storage for EC2), EFS (managed NFS) |
| Database | RDS (managed relational: Postgres/MySQL/etc.), DynamoDB (managed NoSQL), Aurora (AWS's own MySQL/Postgres-compatible engine) |
| Networking | VPC, Route 53 (DNS), CloudFront (CDN), API Gateway |
| Identity/security | IAM, Cognito (app user auth), Secrets Manager, KMS |
| Messaging/integration | SQS (queues), SNS (pub/sub), EventBridge (event bus) |
| Observability | CloudWatch (metrics/logs/alarms), X-Ray (tracing) |

## Infrastructure as code

```sh
aws s3 ls                          # AWS CLI: list buckets
aws sts get-caller-identity        # check which identity/role you're using
```

```yaml
# CloudFormation (AWS-native IaC)
Resources:
  MyBucket:
    Type: AWS::S3::Bucket
```

Three common ways to provision AWS infrastructure as code: **CloudFormation**
(AWS-native YAML/JSON templates), the **AWS CDK** (define infrastructure in
a real programming language — TypeScript, Python, etc. — which synthesizes
to CloudFormation), and **Terraform** (HashiCorp's cloud-agnostic tool,
widely used for AWS despite not being AWS-native). Prefer one of these over
manual console clicks for anything meant to be reproducible or reviewed.

## The shared responsibility model

AWS secures "the cloud" (physical infrastructure, hypervisor, managed-service
internals); the customer secures "in the cloud" (IAM policies, security
group rules, data encryption choices, patching an EC2 instance's OS). A
misconfigured public S3 bucket or an overly permissive security group is a
customer-side failure under this model, not an AWS failure, however common
it is in incident writeups.

## Common pitfalls

- **Long-lived IAM access keys committed to source control or embedded in
  code** — prefer roles (assumed by EC2/Lambda/ECS via an instance/execution
  role) so credentials are never a static secret to leak in the first place.
- **A public S3 bucket by accident** — check Block Public Access settings
  and bucket policies explicitly; this is one of the most common real-world
  AWS security incidents.
- **Choosing EC2 by default without considering Lambda/Fargate** — for
  event-driven or intermittent workloads, a managed compute service can
  remove a whole category of patching/scaling operational work that a raw
  EC2 fleet requires.
- **Ignoring AZ placement** — provisioning everything in one AZ defeats the
  purpose of a multi-AZ region; a Multi-AZ RDS deployment, for example, is a
  deliberate, named option, not the default.
- **Not tagging resources** — cost attribution and cleanup both depend on
  consistent tagging; an untagged sprawl of resources is a common source of
  "what is this and can we delete it" months later.

## Learn more

- [AWS documentation](https://docs.aws.amazon.com/)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/) — the canonical cross-cutting best-practices reference.
- [AWS CLI reference](https://docs.aws.amazon.com/cli/latest/reference/), [AWS CDK docs](https://docs.aws.amazon.com/cdk/)
- [Terraform AWS provider docs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
