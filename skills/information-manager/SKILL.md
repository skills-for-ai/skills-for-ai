---
name: information-manager
description: Use when asked about the information management function — information governance, data classification/retention, records management, or information security policy at the organizational level — as distinct from a technical database or security-tooling skill, which this function relies on but doesn't itself specify.
---

# Information Manager

Information management governs an organization's information as an asset
across its whole lifecycle — creation, classification, use, retention, and
disposal — a **governance and policy** function, distinct from the
technical implementation a database skill (e.g.
[[postgresql-database]]) or a security-tooling skill covers.

## Information governance

The framework of policies, roles, and accountability for how information
is created, classified, used, shared, and disposed of. A common
governance question this function should be able to answer for any given
dataset: **who owns it, who can access it, how long is it kept, and how is
it disposed of** — a dataset nobody can answer this for is an ungoverned
liability, not a neutral asset.

## Classification and retention

- **Classification** — labeling information by sensitivity (e.g. public,
  internal, confidential, restricted) so handling rules (who can access
  it, how it can be shared, what encryption applies) can be applied
  consistently rather than judged case by case.
- **Retention schedule** — a policy stating how long each category of
  information must (regulatory/legal reasons) or should (business need)
  be kept, and when it must be disposed of. Keeping everything indefinitely
  "just in case" is not a neutral safe default — it expands the
  organization's exposure in a breach or legal discovery process, and often
  violates data-protection law's data-minimization principle outright
  (see [[locale]]'s note on jurisdiction-specific data-protection
  frameworks, which similarly can't be assumed universal).

## Records management

Distinct from general document storage: a **record** is information kept
specifically as evidence of a decision, transaction, or activity (a signed
contract, a regulatory filing, a decision log) — records management
ensures these are captured, findable, and tamper-evident for as long as
required, which is a stricter bar than "the file is saved somewhere."

## Information security policy (organizational level)

Information management sets the **policy layer** — acceptable use,
access-control principles (least privilege), incident-reporting
obligations, data-handling rules — that a technical security function then
implements with specific tooling and controls. Confusing the two levels
(assuming a written policy alone constitutes actual security, or assuming
technical controls alone substitute for governance and accountability) is
a common gap: a strong technical control with no policy backing it lacks
organizational accountability when it's bypassed, and a strong policy with
no technical enforcement is unlikely to be consistently followed.

## Common pitfalls

- **No named owner for a given dataset or information category** — makes
  classification, retention, and access decisions ad hoc and inconsistent
  across the organization.
- **Indefinite retention as a default** — increases breach exposure and
  legal-discovery scope, and often conflicts with data-minimization
  obligations under applicable data-protection law.
- **Treating a written policy as sufficient without technical enforcement**
  — or the reverse, treating a technical control as sufficient without
  policy and accountability behind it; both halves are needed.
- **Applying one jurisdiction's data-protection assumptions globally** —
  retention, consent, and cross-border transfer rules vary meaningfully by
  jurisdiction (see [[locale]] on not assuming rules generalize) and
  should be checked, not assumed.
- **Confusing "stored somewhere" with "managed as a record"** — a
  regulatory filing saved in a personal folder with no retention
  enforcement, backup, or access control isn't actually being managed as
  the record it needs to be.

## Learn more

- [ISO 15489](https://www.iso.org/standard/62542.html) — the international standard for records management.
- [ISO/IEC 27001](https://www.iso.org/standard/27001) — information security management systems, the policy-layer counterpart to technical security controls.
- [[locale]] for why data-protection/retention rules vary by jurisdiction and shouldn't be assumed universal.
