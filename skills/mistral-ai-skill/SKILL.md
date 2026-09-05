---
name: mistral-ai-skill
description: Use when asked what Mistral AI is, how to call its API (La Plateforme), its open-weight vs proprietary model lines, or how it compares to other model providers. Verify current model names/pricing against Mistral's docs — this file covers stable shape, not a specific model generation's numbers.
---

# Mistral AI Skill

Mistral AI is a French AI company notable for both a hosted API (**La
Plateforme**) and for releasing genuinely **open-weight** models under
permissive licenses (Apache 2.0 for several lines) — downloadable and
self-hostable, not just API-accessible, which distinguishes it from most
other frontier-model vendors.

## Two kinds of models: open-weight and proprietary

- **Open-weight** — e.g. the Mistral/Mixtral lines historically released
  with downloadable weights (including sparse **mixture-of-experts (MoE)**
  architectures like Mixtral, which route each token through a subset of
  expert sub-networks rather than the whole model — cheaper inference at
  similar quality to a much larger dense model). Runnable locally via
  Ollama/vLLM/llama.cpp or via any hosting provider, not just Mistral's own
  API.
- **Proprietary, API-only** — larger flagship models (historically branded
  "Large") offered only through La Plateforme or partner clouds, not
  released as downloadable weights.

Exact current model names, sizes, and licenses per release change — check
Mistral's model list rather than assuming a specific line is still the
current flagship or still open-weight.

## Core API shape (La Plateforme)

```python
from mistralai import Mistral

client = Mistral(api_key="...")
resp = client.chat.complete(
    model="mistral-large-latest",  # verify current model id against docs
    messages=[{"role": "user", "content": "Say hi in one word."}],
)
print(resp.choices[0].message.content)
```

The API deliberately mirrors the OpenAI Chat Completions shape
(`messages`, `role`/`content`, `tools` for function calling, streaming via
SSE) — most OpenAI-compatible client tooling works against it with only the
base URL and model name changed.

## Distinctive capabilities

- **Function calling** — same general JSON-schema tool-declaration pattern
  as other providers.
- **Embeddings** — a dedicated embeddings endpoint/model for retrieval/RAG
  use cases, separate from the chat models.
- **Code-specialized models** — a dedicated code-generation-focused model
  line alongside the general chat lines.
- **Self-hosting** — because several lines are open-weight, an organization
  with data-residency or sovereignty requirements can run a Mistral model
  entirely on its own infrastructure rather than calling a hosted API at
  all — a meaningfully different deployment option than most proprietary-only
  providers offer.

## Common pitfalls

- **Assuming every Mistral model is open-weight** — only some lines are;
  others are proprietary and API-only. Check the specific model's license
  before planning to self-host it.
- **Copying an OpenAI SDK snippet verbatim** and expecting it to work
  unmodified — the request/response shape is deliberately similar but the
  client library, base URL, and some parameter names still differ.
- **Hard-coding a `-latest` model alias in something that needs
  reproducible output** — `-latest` aliases intentionally move to newer
  underlying models over time; pin a dated model id when reproducibility
  matters more than automatically getting improvements.

## Learn more

- [Mistral AI docs](https://docs.mistral.ai/)
- [La Plateforme](https://console.mistral.ai/) — API console and key
  management.
- [Mistral model list](https://docs.mistral.ai/getting-started/models/)
