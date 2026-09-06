---
name: penetration-testing-skill
description: Use when asked to simulate an attack on a system to find security vulnerabilities — reconnaissance, scanning, exploitation, reporting — black-box vs. white-box approaches, as one specific security-testing technique among others (see security-testing-skill). Requires proper authorization — never simulate an attack against a system without explicit permission.
---

# Penetration Testing Skill

Penetration testing ("pen testing") evaluates the security of a system or
network by simulating a real attack on it, to identify vulnerabilities
and weaknesses before an actual attacker can exploit them. **Only
performed against systems you're explicitly authorized to test** — an
unauthorized simulated attack is itself the crime a real attacker would
commit.

## Black-box vs. white-box

- **Black-box** — conducted with no prior knowledge of the system's
  internals, mirroring what an external attacker would actually have
  (see [[black-box-testing-skill]] for the general technique family this
  draws from).
- **White-box** — conducted with full knowledge of internals, useful for
  a deeper, more thorough assessment when the goal is comprehensive
  coverage rather than realistic external-attacker simulation (see
  [[white-box-testing-skill]]).

## The typical process

1. **Planning and reconnaissance** — gather information about the target:
   architecture, network topology, and potential vulnerabilities.
2. **Scanning** — use tools to find open ports, running network services,
   and known vulnerabilities.
3. **Gaining access** — attempt to exploit identified vulnerabilities to
   actually get into the system, not just theorize that a vulnerability
   might be exploitable.
4. **Maintaining access** — if successful, attempt to sustain access and
   gather further information, mirroring what a real attacker would do
   once inside rather than stopping at the initial breach.
5. **Analysis and reporting** — document identified vulnerabilities and
   provide concrete remediation recommendations; the report is the actual
   deliverable value of the engagement, not the exploit itself.

## Techniques used

Scanning for open ports, exploiting known vulnerabilities, and social
engineering (tricking users into revealing sensitive information) —
technical and human-factor attack vectors both, since real attackers
aren't limited to purely technical exploitation.

## Common pitfalls

- **No explicit written authorization before testing** — this is not
  optional; penetration testing without permission is unauthorized
  computer access, a serious legal matter, regardless of intent.
- **Stopping at "gaining access" without assessing impact** — the
  business-relevant question is what an attacker could actually do once
  in, not just whether initial access was possible.
- **A report that lists vulnerabilities without prioritized, actionable
  remediation guidance** — a pen test's value is realized in the fixes it
  drives, not in the finding list alone.
- **Treating a clean pen test result as ongoing assurance** — a point-in-
  time test says nothing about vulnerabilities introduced afterward;
  security testing needs to be ongoing, not a one-time checkbox.

## Learn more

- [[security-testing-skill]] for the broader security-verification discipline penetration testing is one technique within.
- [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/) — a widely-used public methodology reference.
- This describes an authorized security-testing methodology; never test a system without explicit permission from its owner.
