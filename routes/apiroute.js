// Calling the required module here, along with the model document below.
const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.get("/apiroute/transaction", (req, res) => {
  Transaction.find({}) // Find the object within the model document called.
    .then((TransactionDb) => {
      res.json(TransactionDb);
    })
    .catch((err) => {
      // Catch error, then return error below.
      res.status(404).json(err);
    });
});

router.post("/apiroute/transaction", ({ body }, res) => {
  Transaction.create(body) // Calling 'body' from line 16
    // Creating a body to post data too.
    // Finding the object within the model document.
    .then((TransactionDb) => {
      res.json(TransactionDb);
    })
    .catch((err) => {
      // Catch error, then return error below.
      res.status(404).json(err);
    });
});

// Creating this ahead of time - Need to replace 'xx' with another term.
router.post("/apiroute/transaction/xx", ({ body }, res) => {
  Transaction.insertMany(body) // Calling 'body' from line 29.
    // Creating a body to post data too.
    // Finding the object within the model document.
    .then((TransactionDb) => {
      res.json(TransactionDb);
    })
    .catch((err) => {
      // Catch error, then return error below.
      res.status(404).json(err);
    });
});

module.exports = router;
