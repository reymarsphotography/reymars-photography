const CACHE_NAME = 'reymars-cache-v2';
const ASSETS = [
  '/',
  '/index.html',
  '/assets/css/main.css',
  '/assets/js/main.js',
  '/images/icons/icon-192.png',
  '/images/icons/icon-512.png'
];

// Install event - cache essential files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('📸 Reymars cache initialized');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event - clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch event - serve cached assets or fallback
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Serve from cache, or fetch new version
      return response || fetch(event.request).catch(() => {
        // Offline fallback for missing images
        if (event.request.destination === 'image') {
          return caches.match('/images/icons/icon-192.png');
        }
      });
    })
  );
});
