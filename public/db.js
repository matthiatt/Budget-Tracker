//First declaring my global variables.
// instead of writing out line 4 again, I am lazy so declaring it so if I use it more than once, I can just call it again.
let db;
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = function (e) {
  const db = e.target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};
