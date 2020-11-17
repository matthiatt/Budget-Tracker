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

function addTransactionAmounts() {
  // Function purpose: to populate the area to see the transaction amounts being displayed.
  // To add more, I want this function to have the ability to add fiat amounts when action is completed.
  var totalAmount =
}
