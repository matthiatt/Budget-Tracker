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
