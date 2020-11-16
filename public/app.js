// Creating an array for later functionality to be implemented by 'transModel'
let transModel = [];

fetch("/apiroute/transaction")
  .then((res) => {
    // Promise to return the the data on response.
    return res.json();
  })
  .then((data) => {
    // Creating a promise to take the database data on a global variable I called on line 1.
    transModel = data;
  });
