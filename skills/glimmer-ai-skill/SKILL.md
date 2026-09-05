---
name: glimmer-ai-skill
description: Use when asked what Meta's Muse Glimmer is — an open-source, on-device agentic model from Meta for always-on local agents. Verify current specifics at developer.meta.com/ai/lp/muse-glimmer before repeating details from this file; it's a fast-moving open model release and the facts here were captured on 2026-09-05.
---

# Muse Glimmer (Meta) Skill

**Muse Glimmer** is an open-source AI model from Meta, licensed under
**Apache 2.0**, built specifically for **always-on local agents** — running
entirely on-device rather than calling a cloud API.

*The facts below were read from
[developer.meta.com/ai/lp/muse-glimmer](https://developer.meta.com/ai/lp/muse-glimmer/)
on 2026-09-05 — re-check that page before treating a specific number
(parameter count, benchmark result) here as still current.*

## Core specifications

- **30 billion parameters** — sized to run on a single consumer GPU or a
  Mac, not a datacenter cluster.
- Built for **long-running agent sessions**: reliable tool-calling, task
  execution and failure recovery across multi-hour sessions, and
  **self-managed memory** that persists state across restarts.
- **Multimodal perception** — built-in image and document understanding, not
  a text-only model with a bolted-on vision adapter.

## Why "local" is the point

Unlike a hosted-API model, Glimmer is explicitly designed for **on-device
deployment without cloud dependency** — the agent keeps running, keeps its
memory, and keeps calling tools without a round trip to a remote service.
That's the intended differentiator versus a cloud-hosted agent framework
built on an API-only model.

## Access points

Meta lists multiple ways to deploy it, reflecting an open-weights model
rather than a single hosted endpoint:

- [Hugging Face](https://huggingface.co/) (model card + weights)
- [Ollama](https://ollama.com/), [LM Studio](https://lmstudio.ai/) — local
  runners
- [Unsloth](https://unsloth.ai/) — quantization/fine-tuning tooling
  ("Unsloth Desktop" per the source page)
- [Fireworks AI](https://fireworks.ai/), [Together AI](https://together.ai/),
  [OpenRouter](https://openrouter.ai/) — hosted-inference alternatives for
  running the same open weights without managing hardware

## Documentation

Meta's page points to guides for prompting, quantization, speculative
decoding, and integration with vLLM, llama.cpp, and ExecuTorch — i.e. the
usual open-weight-model deployment toolchain, not a proprietary SDK.

## Common pitfalls

- **Assuming it needs a Meta-hosted API to run** — the entire point of the
  release is that it doesn't; it's an open-weight model you download and run
  yourself (or via a third-party host), like Llama before it.
- **Treating benchmark claims** (agentic reasoning, SWE-Bench coding results,
  multimodal understanding "competitive with comparable models") **as
  independently verified** rather than vendor-reported — check the model
  card on Hugging Face for the actual benchmark tables and methodology.
- **Confusing "Muse" and "Glimmer"** — the source page names the combined
  product "Muse Glimmer"; don't assume they're two unrelated things or that
  "Muse" alone refers to the same model without checking Meta's current
  naming.

## Learn more

- [developer.meta.com/ai/lp/muse-glimmer](https://developer.meta.com/ai/lp/muse-glimmer/) — the primary source for this skill.
- `dev.meta.ai/docs/muse-glimmer/` (per the source page) — technical docs.
- Hugging Face model card (search "Muse Glimmer") — weights, license text, and benchmark tables.
