const CACHE_NAME = 'quickblink-v8';
// Phonon 31M English voice (~35 MB voice model) is NOT precached here. It
// downloads on first English TTS use from Hugging Face and is then cached
// by the Phonon runtime in its own Cache API bucket ('phonon-tts-v1') —
// never re-downloaded on open. Cross-origin requests pass through this
// worker untouched (see the fetch handler), so the runtime owns that cache.
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        // v8 drops the v7 cache, which held the removed neural-voice model
        // and runtime files fetched same-origin. Anything the old voice
        // runtime cached in its own Cache API buckets is inert dead
        // storage now — no code references it — and browsers evict it
        // under storage pressure.
        keys.filter(key => key !== CACHE_NAME && key.startsWith('quickblink-')).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;
  if (!requestUrl.pathname.startsWith(new URL(self.registration.scope).pathname)) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put('./index.html', copy));
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }))
  );
});
