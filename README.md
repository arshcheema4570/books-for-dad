# QuickBlink — Offline Micro-Learning

A personal and family learning app with concise book summaries (“blinks”), practical takeaways, and multilingual reading and audio controls.

**Try it:** [Open QuickBlink](https://arshcheema4570.github.io/books-for-dad/)

## Features

- Punjabi, Hindi, and English reading modes.
- Searchable book library with category filters, saved summaries, and a focused reader with blink-by-blink navigation.
- Browser text-to-speech with language-aware voice selection, playback controls, speed cycling, and a sleep timer.
- Dark, sepia, and elder-friendly reading modes.
- Installable PWA with an offline app shell. Saved books, preferences, and reading state are kept in browser storage on the device.

## Use and install

Open the deployed link in a modern browser. On a supported phone, use **Install app** or **Add to Home Screen** to install it. The app shell is cached after a successful first visit; audio voices depend on the browser and voices available on the device.

For local testing, open `index.html` in a modern browser or serve the repository root over HTTP, for example:

```bash
python3 -m http.server 8000
```

## Content and license note

The app code is licensed under the MIT License. The summaries are educational summaries and do not replace the original books. The project is not affiliated with Blinkist, the authors, or the publishers of the books mentioned.
