# Third-party notices — Kokoro Hindi voice

The Hindi voice in this app is the offline **Kokoro-82M** text-to-speech model,
vendored under `vendor/` and `models/` (no network fetch at runtime).

| Component | License | Source |
|---|---|---|
| Kokoro-82M model weights (`model_quantized.onnx`), voice `.bin` files, tokenizer | Apache-2.0 | `onnx-community/Kokoro-82M-v1.0-ONNX` (hexgrad/Kokoro-82M) |
| kokoro-js (patched source; `vendor/kokoro/kokoro-hindi.web.js`) | Apache-2.0 | `hexgrad/kokoro` |
| Transformers.js 3.5.1 (bundled inside `kokoro-hindi.web.js`) | Apache-2.0 | `@huggingface/transformers` |
| onnxruntime-web 1.22.0-dev (bundled JS; `vendor/ort/ort-wasm-simd-threaded.jsep.wasm`) | MIT | Microsoft / ONNX Runtime |
| eSpeak-NG (`vendor/espeak-ng/espeak-ng.js` + `espeak-ng.wasm`) | GPL-3.0-or-later | `espeak-ng@1.0.2` (ianmarmour/espeak-ng.js); eSpeak-NG by the eSpeak-NG authors |

## eSpeak-NG (GPL-3.0) — license text and source

The full GPL-3.0 license text ships alongside the files as
`vendor/espeak-ng/LICENSE-espeak-ng`. Corresponding source:

- eSpeak-NG: https://github.com/espeak-ng/espeak-ng
- JS wrapper build: https://github.com/ianmarmour/espeak-ng.js (package `espeak-ng@1.0.2`)

The eSpeak-NG build is used as-is (not modified). The Kokoro model, kokoro-js,
Transformers.js, and onnxruntime-web remain under their permissive licenses
above; only the eSpeak-NG component itself is under GPL-3.0.
