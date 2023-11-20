const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const cors = require("cors");
const Game = require('./model');

const dbURI = "mongodb://127.0.0.1:27017/pl";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });


app.use(express.json());
app.use(cors());

app.get("/games", async (req, res) => {
  try {
    const games = await Game.find({});
    console.log(games);
    res.json(games);

    return games;
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
