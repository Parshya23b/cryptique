const express = require("express");
const { connect } = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3002;  
connect(process.env.MONGODB_URI).then(() => {
  console.log("Connected to the database");
});

app.use(
  cors({ origin: process.env.CORS_ORIGIN, credentials: true, methods: "GET, POST, PUT, DELETE" })
);
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send('<h1 style="text-align:center;">Welcome to the Cryptique Server</h1>');
});
app.use("/api/auth", require("./routes/userRouter"));
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
