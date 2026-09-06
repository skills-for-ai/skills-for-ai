---
name: gpt-ai
description: Use when asked what OpenAI's GPT/ChatGPT is, how to call the OpenAI API (Chat Completions vs the Responses API), its function-calling and structured-output features, or how it compares to other model providers. Verify current model names/pricing against OpenAI's docs — this file covers stable shape, not a specific model generation's numbers.
---

# GPT (OpenAI)

GPT (Generative Pre-trained Transformer) is OpenAI's large language model
family; **ChatGPT** is the consumer/team chat product built on it. "GPT" is
also used generically in the industry for the transformer-based
autoregressive LLM architecture GPT popularized, distinct from OpenAI's
specific named models.

## Two API shapes

OpenAI has two overlapping ways to call a model:

- **Chat Completions API** (`/v1/chat/completions`) — the original,
  widely-copied shape: a `messages` array of `{role, content}`, a `model`,
  and completion parameters. Most third-party tools and "OpenAI-compatible"
  APIs from other vendors mimic this shape specifically.
- **Responses API** (`/v1/responses`) — OpenAI's newer, more agent-oriented
  API: built-in support for multi-turn state via a `previous_response_id`,
  built-in tools (web search, file search, code interpreter), and a unified
  way to mix text/image/tool-call items in one response.

```python
from openai import OpenAI
client = OpenAI()

# Chat Completions
resp = client.chat.completions.create(
    model="gpt-4o",  # verify current model id against docs
    messages=[{"role": "user", "content": "Say hi in one word."}],
)
print(resp.choices[0].message.content)

# Responses API
resp = client.responses.create(
    model="gpt-4o",
    input="Say hi in one word.",
)
print(resp.output_text)
```

## Function calling / tools and structured outputs

```python
tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "parameters": {
            "type": "object",
            "properties": {"city": {"type": "string"}},
            "required": ["city"],
        },
    },
}]
resp = client.chat.completions.create(
    model="gpt-4o", messages=[...], tools=tools,
)
```

- **Function calling** — declare a JSON-schema function; the model returns a
  structured call for the caller to execute and feed the result back in a
  follow-up message.
- **Structured outputs** (`response_format={"type": "json_schema", ...}`) —
  constrains the model's raw output to conform exactly to a given JSON
  schema, rather than hoping a prompted "respond in JSON" instruction is
  followed.

## Model family shape

OpenAI ships multiple concurrent model lines that trade off capability,
latency, and cost (historically including a flagship multimodal line and
smaller/faster variants, plus separate reasoning-focused model lines).
Exact current model names, context windows, and pricing change frequently —
don't hard-code a specific id or number from training data into anything
user-facing; check OpenAI's model list.

## Common pitfalls

- **Assuming Chat Completions and Responses are interchangeable
  drop-ins** — they have different request/response shapes and different
  built-in tool support; migrating between them is a real porting task, not
  a rename.
- **Treating "OpenAI-compatible API" (offered by many other vendors/local
  runners) as guaranteeing full feature parity** — most only implement a
  subset of the Chat Completions shape (basic messages + streaming), not
  every parameter or the Responses API.
- **Hard-coding a model name in production code without a fallback plan** —
  OpenAI deprecates older models on a published schedule; watch for
  deprecation notices rather than discovering it at a hard cutover.
- **Confusing "GPT" the architecture family with "OpenAI's GPT models"
  specifically** — many other vendors' models (including open-weight ones)
  are also GPT-style transformers; "GPT" alone doesn't imply OpenAI.

## Learn more

- [OpenAI API docs](https://platform.openai.com/docs/)
- [OpenAI API reference](https://platform.openai.com/docs/api-reference)
- [Model deprecations](https://platform.openai.com/docs/deprecations)
