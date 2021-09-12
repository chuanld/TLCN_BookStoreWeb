require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

//Connect Mongodb
const URI = process.env.MONGODB_URL;
mongoose.connect(URI, (err) => {
  if (err) throw err;
  console.log("Connect to DB success!");
});

app.get("/", (req, res) => {
  res.json({ msg: "Hello world" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
