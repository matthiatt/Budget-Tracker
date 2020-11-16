// Required modules
const mongoose = require("mongoose");

let Schema = mongoose.Schema; //Schema constructor

const newTransSchema = new Schema({
  // Displaying what I want my new constructor object to accomplish with other objects defining actions.
  name: {
    type: String,
    trim: true,
    required:
      "Please enter in what type of transaction you would like to complete today.",
  },
  value: {
    type: Number,
    required: "Please enter in desired amount of fiat here.",
  },
  date: {
    type: Date, //enabling basic storage of time and date.
    default: Date.now, //Today's date.
  },
});

// this model document 'Transaction' being defined.
let Transaction = mongoose.model("Transaction", newTransSchema);

module.exports = Transaction;
