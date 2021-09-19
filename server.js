require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//Use
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//Routes
app.use("/user", require("./routes/userRouter"));

//Connect to database (mongodb)
const URI = process.env.MONGODB_URL;
mongoose.connect(URI, (err) => {
  if (err) throw err;
  console.log("Connect to MongoDB success");
});

// Test connect to db
// app.get("/", (req, res) => {
//   res.json({ msg: "Welcome my bookstore CHUANG CHUANG" });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
