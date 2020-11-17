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

const cacheStatic = "staticCache";
const cacheDataGiven = "cacheDataName";

//Next I want to create/install my service worker here.
self.addEventListener("install", (e) => {
  // adding an event listener here within the function within the parameters.
  e.waitUntil(
    caches.open(cacheStatic).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});
