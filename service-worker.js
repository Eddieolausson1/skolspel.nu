// service-worker.js

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('offline-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/script.js',
        '/image.jpg'
        // Lägg till andra filer och resurser som du vill cachea offline
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});