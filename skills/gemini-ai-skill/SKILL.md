---
name: gemini-ai-skill
description: Use when asked what Google's Gemini is, how to call the Gemini API (Google AI Studio / Vertex AI), its multimodal and function-calling capabilities, or how it compares to other model providers. Verify current model names/pricing against Google's docs — this file covers stable shape, not a specific model generation's numbers.
---

# Gemini (Google) Skill

Gemini is Google DeepMind's family of multimodal large language models.
It's accessed either through **Google AI Studio / the Gemini API**
(`generativelanguage.googleapis.com`, simplest path, API-key auth) or through
**Vertex AI** on Google Cloud (enterprise path — IAM auth, VPC controls,
regional deployment, the same underlying models).

## Model family shape

Google ships Gemini in size/latency tiers within each generation (naming has
included, historically, "Pro" for the flagship-capability tier and "Flash"
for a faster/cheaper tier, plus lighter "Flash-Lite"/nano-scale variants for
on-device or high-volume use). The specific generation number and exact model
ids change over time — check Google's model list rather than assuming a name
from training data is still current or still maps to the same capability
tier.

## Core API shape

```python
from google import genai

client = genai.Client(api_key="...")
response = client.models.generate_content(
    model="gemini-2.5-flash",   # verify current model id against docs
    contents="Explain how photosynthesis works in one sentence.",
)
print(response.text)
```

The core call is `generateContent` (or `streamGenerateContent` for
streaming). Requests are a list of `contents`, each with a `role`
(`user`/`model`) and one or more `parts` — which is what makes multimodal
input a first-class case rather than a special mode:

```python
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=[
        {"role": "user", "parts": [
            {"text": "What's in this image?"},
            {"inline_data": {"mime_type": "image/png", "data": image_bytes}},
        ]},
    ],
)
```

## Distinctive capabilities

- **Native multimodality** — image, audio, video, and PDF input alongside
  text, across the model family rather than a separate vision-only model.
- **Long context windows** — Gemini models have generally led on raw context
  length among major providers; useful for whole-codebase or whole-document
  workloads. Verify the current window size per model, it varies by tier.
- **Function calling / tool use** — declare functions with a JSON-schema-like
  `FunctionDeclaration`; the model returns a structured call for your code to
  execute and feed back, the same general pattern as other providers' tool
  use.
- **Context caching** — pay a reduced rate for repeatedly reusing a large,
  unchanged context (e.g. a big document) across multiple calls.
- **Grounding with Google Search** — an opt-in tool that lets the model
  retrieve and cite live search results as part of its answer.

## Common pitfalls

- **Mixing up the Gemini API and Vertex AI auth models** — the Gemini API
  uses a simple API key; Vertex AI uses Google Cloud IAM/service accounts and
  a project/region. Client libraries and even model ids can differ slightly
  between the two paths for the same underlying model.
- **Assuming a `contents`/`parts` shape from an old snippet still matches**
  — the SDKs have gone through more than one major version (`google-
  generativeai` → `google-genai`); check which package a snippet targets.
- **Hard-coding a model generation name** in code meant to keep working —
  Google deprecates older generations on a schedule; pin to a specific
  dated/stable id in production rather than a bare tier name if you need
  long-term stability.

## Learn more

- [Gemini API docs](https://ai.google.dev/gemini-api/docs)
- [Google AI Studio](https://aistudio.google.com/) — the quickest way to try
  a prompt and get the equivalent API call.
- [Vertex AI Generative AI docs](https://cloud.google.com/vertex-ai/generative-ai/docs)
