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
  const currentCaches = [STATIC_CACHE, RUNTIME_CACHE]; // Calling the variables I declared on lines 13 and 14.
  e.waitUntil(
    caches // ref = CacheStorage
      .keys()
      .then((cachedItems) => {
        return cachedItems.filter(
          (cachedItems) => !currentCaches.includes(cachedItems)
        );
      })
      .then((deleteCache) => {
        return Promise.all(
          deleteCache.map((deleteCaches) => {
            return caches.delete(deleteCaches);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// After activing the service-worker, I then need to create a 'fetch'.
self.addEventListener("fetch", (e) => {
  // Since 'get requests' can be cached anything that's not a 'get requests', then it can not be cached.
  if (
    e.req.method !== "GET" ||
    !e.req.url.startsWith(self.location.origin) // Orgin is used here to return the location of the object based on the URL thats present.
  ) {
    e.respondWith(fetch(e.req)); // Having the event respond with the fetch method, which will bring the event based on the request.
    return;
  }

  // 'Get requests' for the data, which is coming from the /api routes.
  if (e.req.url.includes("/public/")) {
    // Making it possible to make the user see the information that's been previously loaded if the internet stops working for any reason.
    e.respondWith(
      // Calling the variable again I declared on line 13.
      // Opening the CacheStorage then to fetch that will have a Promise response and also request info.
      caches.open(RUNTIME_CACHE).then((cache) => {
        return (
          fetch(e.req)
            .then((res) => {
              cache.put(e.req, res.clone());
              return res;
            })
            // Catch response if theres an error and to display any reason.
            .catch(() => caches.match(e.req))
        );
      })
    );
    return;
  }

  e.respondWith(
    caches.match(e.req).then((cachedRes) => {
      if (cachedRes) {
        return cachedRes;
      }

      return caches.open(RUNTIME_CACHE).then((cache) => {
        return fetch(e.req).then((res) => {
          return cache.put(e.req, res.clone()).then(() => {
            return res;
          });
        });
      });
    })
  );
});
