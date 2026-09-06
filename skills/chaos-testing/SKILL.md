---
name: chaos-testing
description: Use when asked to deliberately inject failure into a system to test resilience — chaos engineering, fault injection — as distinct from disaster-recovery testing (see disaster-recovery-testing), which validates a specific recovery procedure rather than exploring unknown failure modes.
---

# Chaos Testing

Chaos testing intentionally introduces failures and disruptions into a
system to evaluate its resilience and recovery ability — a proactive way
to find weaknesses before they cause a real production outage, rather
than discovering them the hard way.

## What gets injected

Server crashes, network partitions, high CPU load, memory exhaustion,
database connectivity failures — simulating the unpredictable ways real
components actually fail, then observing whether the system maintains
acceptable performance or degrades gracefully rather than cascading into
a full outage.

## Automation and tooling

Manual chaos experiments are slow and error-prone at any real scale;
automated chaos tooling (Chaos Monkey, Gremlin, Litmus, among others)
schedules experiments, injects failures continuously, and collects
metrics without human intervention — often integrated directly into
CI/CD so resilience is checked on an ongoing basis, not just once.

## What it's good for

Improved reliability, faster incident response (because failure modes are
already familiar from deliberate testing, not discovered live), and
concrete evidence for architectural safeguards — circuit breakers, retry
logic, fallback paths — actually working as designed. Particularly
valuable for distributed systems and microservices, where complex
inter-service dependencies create cascading-failure risk that's hard to
reason about from the architecture diagram alone.

## Doing it responsibly

Start in non-critical or staging environments before ever touching
production; establish clear success criteria and strong observability
before running an experiment; communicate with stakeholders in advance —
chaos testing that surprises an on-call team defeats its own purpose.

## Common pitfalls

- **Running chaos experiments in production with no observability in
  place first** — without solid monitoring, an injected failure's actual
  effect (and whether the system truly recovered) can't be confirmed.
- **Skipping staging entirely and going straight to production** — a
  gradual rollout (non-critical environments first) catches obviously
  broken experiment design before it risks real user impact.
- **No communication plan** — an unannounced chaos experiment can trigger
  a real incident response for what was actually a planned test.
- **Confusing chaos testing with disaster recovery testing** — chaos
  testing explores unknown failure modes broadly; [[disaster-recovery-testing]]
  validates a specific, already-defined recovery procedure works.

## Learn more

- [[disaster-recovery-testing]] for validating a specific, defined recovery procedure.
- [[failover-testing]] for the specific case of automatic backup-system switchover.
