---
name: claude-ai-skill
description: Use when asked what Claude is, which Claude model/tier to pick, or how Claude (Anthropic's assistant) differs from other AI assistants at a product level. For API mechanics — model ids, pricing, streaming, tool use, MCP, prompt caching, token counting, model migration — use the `claude-api` skill instead; it stays current, this one doesn't repeat that detail.
---

# Claude (Anthropic) Skill

Claude is the family of large language models built by **Anthropic**, and the
name of the assistant product built on them (claude.ai, the Claude Code CLI,
desktop/mobile apps, and IDE extensions).

## Model family shape

Anthropic ships Claude in named **tiers** that trade off capability against
latency/cost, refreshed periodically with new generations:

- **Opus** — the most capable tier, for the hardest reasoning/coding tasks.
- **Sonnet** — the balanced tier, Anthropic's default recommendation for most
  application workloads.
- **Haiku** — the fastest/cheapest tier, for high-volume or latency-sensitive
  work.

Exact current model ids, context windows, and pricing change over time —
don't hard-code a specific id or number from memory into anything
user-facing; check `claude-api` (this session's own skill for that) or
Anthropic's docs for what's current.

## How Claude is typically accessed

- **claude.ai** — the consumer/team chat product.
- **Claude API** (`api.anthropic.com`, the Messages API) — for building your
  own application on top of a Claude model; see the `claude-api` skill for
  request/response shape, streaming, tool use, and the Anthropic SDKs
  (Python, TypeScript).
- **Claude Code** — Anthropic's agentic coding CLI (what this skill file is
  itself running inside of), also available as a desktop app, web app, and
  IDE extension.
- Also available through third-party platforms (AWS Bedrock, Google Cloud
  Vertex AI) for organizations standardized on those clouds.

## What tends to differentiate Claude, at a product level

- Long context windows and strong performance on long-document and
  long-conversation tasks.
- Native, first-class **tool use** (function calling) and support for the
  **Model Context Protocol (MCP)** — an open protocol for connecting a model
  to external tools/data sources, which Anthropic originated.
- An emphasis on Constitutional AI / a documented safety and alignment
  approach, and published model/system cards for each release.
- Claude Code specifically emphasizes agentic, multi-step tool-driven
  workflows over the codebase it's pointed at, rather than single-shot
  chat completions.

## Common pitfalls

- **Assuming a model name/id from training data is still current** — model
  lineups and ids are versioned and change; verify against live docs or the
  `claude-api` skill rather than asserting a specific id or price from
  memory.
- **Conflating "Claude" (the model) with "Claude Code" (the product built on
  it)** — a question about IDE integration, hooks, or slash commands is about
  Claude Code specifically; the `claude-code-guide` agent (available in this
  environment) is the better fit for those than general model knowledge.
- **Treating MCP as Claude-specific** — it's an open protocol Anthropic
  published; other clients and models can implement it too.

## Learn more

- [Anthropic docs](https://docs.anthropic.com/) — the primary reference.
- [claude.ai](https://claude.ai/), [Claude Code docs](https://docs.claude.com/en/docs/claude-code)
- [Model Context Protocol](https://modelcontextprotocol.io/)
- This environment's own `claude-api` skill and `claude-code-guide` agent for
  anything API- or CLI-mechanics-specific — they're kept current, this file
  isn't meant to duplicate them.
