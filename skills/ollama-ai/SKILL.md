---
name: ollama-ai
description: Use when asked to install, run, or script against Ollama — pulling and running local open-weight LLMs, writing a Modelfile, or calling its local REST/OpenAI-compatible API from code.
---

# Ollama

Ollama is a tool for running open-weight large language models **locally** —
on a laptop or workstation GPU/CPU — packaging model download, quantization
variants, and a local inference server behind a small CLI and REST API.

## CLI basics

```sh
ollama pull llama3.2          # download a model from Ollama's library
ollama run llama3.2           # interactive chat in the terminal
ollama list                   # show locally downloaded models
ollama ps                     # show currently loaded/running models
ollama rm llama3.2            # remove a downloaded model
```

`ollama run <model>` both pulls (if not already present) and starts an
interactive session in one command — the fastest path to trying a model.

## Local API

Ollama runs a local server (default `http://localhost:11434`) with its own
REST API, and separately exposes an **OpenAI-compatible** endpoint so
existing OpenAI-client code can point at it with minimal changes.

```sh
curl http://localhost:11434/api/generate -d '{
  "model": "llama3.2",
  "prompt": "Why is the sky blue?",
  "stream": false
}'
```

```python
# Native Ollama Python client
import ollama
resp = ollama.chat(model="llama3.2", messages=[{"role": "user", "content": "Hi"}])
print(resp["message"]["content"])

# OpenAI-compatible client, pointed at Ollama instead of OpenAI
from openai import OpenAI
client = OpenAI(base_url="http://localhost:11434/v1", api_key="ollama")  # key is unchecked, any string works
resp = client.chat.completions.create(
    model="llama3.2",
    messages=[{"role": "user", "content": "Hi"}],
)
```

## Modelfile — customizing a model

A `Modelfile` layers a system prompt, parameters, or a different base weight
file on top of an existing model, similar in spirit to a Dockerfile:

```
FROM llama3.2
PARAMETER temperature 0.3
SYSTEM """
You are a terse code-review assistant. Answer in bullet points only.
"""
```

```sh
ollama create my-reviewer -f ./Modelfile
ollama run my-reviewer
```

## Common pitfalls

- **Picking a model too large for the available VRAM/RAM** — Ollama will
  still try to run it, often by spilling to CPU/swap, which can be
  drastically slower than a smaller or more aggressively quantized variant
  of the same model. Check a model's size/quantization tags on the library
  page against available memory first.
- **Assuming the OpenAI-compatible endpoint supports every OpenAI feature**
  — it covers the common chat/completions/streaming/tool-calling shape, not
  every parameter or the newer Responses API; check Ollama's docs for
  current coverage before porting complex OpenAI-specific code.
- **Forgetting the server needs to be running** — the CLI auto-starts it on
  most installs, but in a container or minimal environment
  `ollama serve` may need to be started explicitly before `ollama run`/API
  calls work.
- **Not distinguishing a model's Ollama library tag from its
  upstream name/license** — the library repackages open-weight models from
  various sources; the license terms are the upstream model's, not
  Ollama's.

## Learn more

- [Ollama docs](https://github.com/ollama/ollama/tree/main/docs)
- [Ollama model library](https://ollama.com/library) — browse available
  models and quantization tags.
- [Ollama API reference](https://github.com/ollama/ollama/blob/main/docs/api.md)
- [Ollama OpenAI compatibility docs](https://github.com/ollama/ollama/blob/main/docs/openai.md)
