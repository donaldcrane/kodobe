const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
const db = require("./database/database");
const router = require("./routes/index");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Welcome to Donald Kodobe assesment solution"));

app.use("/", router);

// Global 404 error handler
app.all("*", (req, res) => res.status(404).json({
  message: "This is not the route you are looking for Comrade", data: null
}));

db.connect();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server Running on: ${port}`);
});

module.exports = app;
