// Required modules
const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const logger = require("morgan");

const PORT = 3000; // Port number connected

const app = express(); //express being defined

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true })); // So express data can be read
app.use(express.json());

app.use(express.static("public")); // to the public folder.

mongoose.connect("mongodb://localhost/budgetTracker", {
  // What I am calling my database.
  useNewUrlParser: true,
  useFindAndModify: false,
});

// The route I am requiring here.
app.use(require("./routes/api"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
