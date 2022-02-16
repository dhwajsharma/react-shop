const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(" connection successful"))
  .catch((err) => {
    console.log(err);
  });

  app.use(cors());
  app.use(express.json());

app.listen(process.env.PORT || 5000, () => {
  console.log("Listening on port 5000");
});
