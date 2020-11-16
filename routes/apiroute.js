// Calling the required module here, along with the model document below.
const router = require("express").Router();
const Transaction = require("../models/transaction.js");

router.get("/apiroute/transaction", (req, res) => {
  Transaction.find({}) //find the object within the model document called.
    .then((TransactionDb) => {
      res.json(TransactionDb);
    })
    .catch((err) => {
      // Catch error, then return error below.
      res.status(404).json(err);
    });
});

module.exports = router;
