// First need to cache the files out so previous data doesn't give false readings. - only doing this for files that are static within the public folder that the user will see and be affected by.
const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "/app.js",
  "/db.js",
  "icons/icon-192x192.png",
  "icons/icon-512x512.png",
];

// Changed my last values to a new string.  Got this from class activities example.
const STATIC_CACHE = "static-cache-v1";
const RUNTIME_CACHE = "runtime-cache";

//Next I want to create/install my service worker here.
self.addEventListener("install", (e) => {
  // adding an event listener here within the function within the parameters.
  e.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting())
  ); // Restructured to put the 'skipWaiting()' in a different place.
  //   self.skipWaiting();
});

// Next after I installed the service-worker, I now want to activate it so it can function correctly.
self.addEventListener("active", (e) => {
  const currentCaches = [STATIC_CACHE, RUNTIME_CACHE];
  e.waitUntil(
    caches.keys().then((cachedItemList) => {
      return cachedItemList.filter(cachedItemList);
    })
  );
});

// After activing the service-worker, I then need to create a 'fetch'.
self.addEventListener("fetch", (e) => {});
