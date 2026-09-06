---
name: security-testing-skill
description: Use when asked to evaluate a system's security — vulnerability scanning, authentication/authorization testing, encryption verification, security configuration review — the umbrella discipline penetration testing (see penetration-testing-skill) and compliance testing (see compliance-testing-skill) both sit within.
---

# Security Testing Skill

Security testing evaluates the security of a software system or
application by testing its security features, functions, and
configurations — identifying and mitigating potential threats,
vulnerabilities, and risks before they can be exploited.

## Types of security testing

- **Vulnerability testing** — scanning the system for known
  vulnerabilities and security holes.
- **Penetration testing** — simulating an actual attack to identify
  exploitable vulnerabilities and assess existing defenses (see
  [[penetration-testing-skill]] for this in full).
- **Authentication testing** — verifying the strength of the
  authentication mechanism: password policy, encryption of credentials,
  and other login-security measures.
- **Authorization testing** — verifying access control actually restricts
  system access to authorized users and roles as intended.
- **Encryption testing** — verifying the effectiveness of the encryption
  algorithms and key management protecting sensitive data.
- **Security configuration testing** — testing the system's security-
  relevant configuration: network settings, user access controls, and
  patch/update status.

## How these relate to each other

Penetration testing is one specific *technique* within the broader
security-testing discipline — it simulates a real attack; the other
types above are narrower, more targeted checks against a specific
security dimension. A comprehensive security-testing program typically
combines several of these rather than relying on any single one.

## Common pitfalls

- **Treating penetration testing as the whole security-testing program**
  — a point-in-time pen test doesn't cover the same ground as ongoing
  vulnerability scanning, authentication/authorization review, and
  configuration checks.
- **Testing authentication strength but not authorization scope** —
  strong login security doesn't mean access control correctly restricts
  what an authenticated user can actually do; both need separate
  verification.
- **Assuming encryption in transit implies encryption at rest, or vice
  versa** — each needs to be verified independently; a system encrypting
  network traffic can still store sensitive data unencrypted on disk.
- **No regular configuration review** — a security configuration correct
  at launch can drift (an opened port, a disabled patch schedule) without
  ongoing checks.

## Learn more

- [[penetration-testing-skill]] for the attack-simulation technique specifically.
- [[compliance-testing-skill]] for security verification scoped to named regulatory requirements.
- [OWASP](https://owasp.org/) — widely-used public security-testing methodology and vulnerability references.
