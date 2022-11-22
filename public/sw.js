const STATIC_CACHE_NAME = "static-cache";
const DYNAMIC_CACHE_NAME = "dynamic_cache";

const cacheStatics = [
  "./index.html",
  "./images/logo.png",
  "",
  "https://fonts.googleapis.com/css2?family=Lexend:wght@400;700;800;900&family=Silkscreen:wght@400;700&display=swap",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME).then((cache) => {
      cache.addAll(cacheStatics);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("App Activated");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheAssets) => {
      return (
        cacheAssets ||
        fetch(event.request).then((cacheRes) => {
          return caches.open(DYNAMIC_CACHE_NAME).then((cache) => {
            cache.put(event.request.url, cacheRes.clone());
            return cacheRes;
          });
        })
      );
    })
  );
});
