---
name: scaleway-cloud-skill
description: Use when asked what Scaleway is, how to use its compute/Kubernetes/storage/GPU products, or how it compares to AWS/GCP/Azure — a European, sovereignty-focused cloud provider. Verify current regions/products/pricing at scaleway.com before repeating specifics from this file — captured from the site on 2026-09-05.
---

# Scaleway Cloud Skill

Scaleway is a European cloud and AI platform positioned as a sovereignty-
and openness-focused alternative to the US hyperscalers (AWS/GCP/Azure),
with an S3-compatible object storage API and Kubernetes-native services
that make much existing cloud tooling portable to it with minimal changes.

*The facts below were read from [scaleway.com](https://www.scaleway.com) on
2026-09-05 — re-check the site before treating a specific product name,
region count, or pricing claim here as still current.*

## Compute

- **Virtual Instances** across General Purpose, Development, Compute
  Optimized, and Memory Optimized families — the standard VM-tier split
  seen across most cloud providers.
- **GPU Instances** — named GPU models on the site include L40S, L4, H100,
  and B300-SXM, aimed at AI training/inference workloads.
- **Bare metal** — multiple distinct offerings: **Dedibox** (dedicated
  servers, Scaleway's original product line), **Elastic Metal** (on-demand
  bare metal with cloud-like provisioning), and even **Mac mini** bare
  metal — notable since dedicated Apple-silicon bare metal isn't common
  among the major hyperscalers.

## Containers and orchestration

- **Kubernetes Kapsule** and **Kosmos** — managed Kubernetes offerings
  (Kapsule for Scaleway-hosted node pools; Kosmos described as a
  multi-cloud/hybrid Kubernetes option pulling in nodes from elsewhere).
- **Serverless Containers** and **Serverless Functions**, plus a
  **Container Registry** — the standard serverless-compute-plus-registry
  trio also offered by the major clouds.

## Storage and databases

- **Object Storage** — explicitly **S3-API-compatible**, meaning existing
  AWS S3 SDKs/tools generally work against it by pointing at a different
  endpoint, without a Scaleway-specific client.
- **Block Storage** and **File Storage** for attached/shared storage.
- **Managed databases**: PostgreSQL, MySQL, MongoDB, Redis, plus a
  **Serverless SQL Database** offering and a **Data Warehouse for
  ClickHouse** (a managed ClickHouse-based analytics warehouse).

## AI/ML

- **Generative APIs** in both **Serverless** and **Dedicated Deployment**
  modes — i.e. a shared-hosted inference endpoint option alongside a
  dedicated-capacity option for a chosen model.
- **GPU clusters** for training, and managed **Apache Spark** and **Kafka**
  for the surrounding data pipeline.

## Networking

**VPC**, **Load Balancer**, a **WAF** (web application firewall), **Edge
Services**, and **Site-to-Site VPN** — the standard networking building
blocks, with the WAF/Edge Services pairing suggesting some CDN/edge
capability alongside pure networking.

## Regions and footprint

Per the site: **4 multi-AZ cloud regions in Europe**, **10 Availability
Zones** across those regions, and **65+ points of presence worldwide** (for
edge/CDN-style reach, distinct from the smaller set of full compute
regions).

## Positioning versus the major hyperscalers

Scaleway's stated differentiators: **European data sovereignty** (data
stays under European jurisdiction), **openness** (built on open,
independent technology to avoid vendor lock-in — e.g. the S3-compatible
API rather than a proprietary object-storage protocol), **transparent,
product-level pricing**, and **sustainability** (renewable-powered
datacenters with published Power Usage Effectiveness metrics). The site
states **100+ integrated cloud and AI products** in total.

## Common pitfalls

- **Assuming full API/feature parity with AWS just because Object Storage
  is S3-compatible** — the storage API surface is compatible, but that
  doesn't imply the rest of Scaleway's services mirror AWS's equivalents
  feature-for-feature.
- **Assuming the same global region footprint as a hyperscaler** — Scaleway
  is explicitly concentrated in Europe (4 regions per the site), not a
  global region list; check current availability before planning a
  deployment outside Europe.
- **Treating marketing sustainability/PUE claims as independently
  audited** — they're vendor-reported on the marketing site; check
  Scaleway's own published sustainability reports for methodology if that
  claim matters to a decision.
- **Confusing Kapsule and Kosmos** — per the site, one is a
  Scaleway-native managed Kubernetes offering and the other is
  multi-cloud/hybrid-oriented; verify current scope/pricing differences
  before recommending one over the other.

## Learn more

- [scaleway.com](https://www.scaleway.com) — the primary source for this
  skill; re-fetch before relying on a specific product, region, or pricing
  claim above.
- [Scaleway documentation](https://www.scaleway.com/en/docs/) — technical
  reference (CLI, API, per-product guides).
