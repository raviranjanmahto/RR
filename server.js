const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// DATABASE CONNECTION
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected successfully🥰"))
  .catch(err => console.log("Error connecting to database🙄", err));

// 4) START SERVER
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
