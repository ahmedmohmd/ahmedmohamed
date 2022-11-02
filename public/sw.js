self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing ...", event);
});

self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Installing ...", event);
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  console.log("[Service Worker] Fetchign Soething ...");
  event.respondWith(null);
});
