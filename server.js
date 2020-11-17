// Required modules
const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const logger = require("morgan");

const PORT = process.env.PORT || 3000; // Port number connected

const app = express(); //express being defined

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true })); // So express data can be read
app.use(express.json());

app.use(express.static("public")); // to the public folder.

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  // What I am calling my database.
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// The route I am requiring here.
app.use(require("./routes/api"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
