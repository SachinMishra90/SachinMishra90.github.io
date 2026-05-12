const CACHE_NAME = 'sachintech-v1';

const assetsToCache = [
  '/index.html',
  '/manifest.json',
  '/style.css',           // ← agar aapki CSS file ka naam alag hai toh change kar dena
  '/app.js'               // ← apni main JavaScript file ka naam yahan likh dena
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Fetch (Offline support)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
