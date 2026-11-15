# Third-party notices — Phonon English voice

The English voice in this app is the offline **Phonon 31M** text-to-speech
model. Its runtime is vendored under `vendor/phonon-tts/`; the voice model
itself downloads once on first English playback (from Hugging Face,
`gradium/phonon-31m-en`) and is then cached in the browser.

| Component | License | Source |
|---|---|---|
| Phonon 31M voice model (`gradium/phonon-31m-en`) | Apache-2.0 | `gradium/phonon-31m-en` on Hugging Face |
| phonon-tts runtime (`vendor/phonon-tts/`) | Apache-2.0 | Gradium / Phonon — see `vendor/phonon-tts/LICENSE-APACHE` and `vendor/phonon-tts/THIRD_PARTY_LICENSES.md` |

Hindi audio uses the device's built-in voice; no third-party voice files
ship for Hindi.
