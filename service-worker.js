self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('sepsis-tool-cache-v1').then(cache => {
      return cache.addAll([
        './index.html',
        './style.css',
        './manifest.json',
        './icon-192.png',
        './icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});