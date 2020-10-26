const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const apiPort = process.env.PORT || 8080;
const path = require("path");

const Record = require("./models/record-model");

const db = require("./db");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(express.static(path.join(__dirname, "..", "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

app.post("/reports", (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a record",
    });
  }

  const record = new Record(body);

  if (!record) {
    return res.status(400).json({ success: false, error: err });
  }

  record
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        message: "Record created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Record not created!",
      });
    });
});

app.get("/getreports", async (req, res) => {
  await Record.find({ "WW-YYYY": req.query.date }, (err, reports) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!reports.length) {
      return res
        .status(404)
        .json({ success: false, error: `Reports not found` });
    }
    return res.status(200).json({ success: true, data: reports });
  }).catch((err) => console.log(err));
});

// if (process.env.NODE_ENV === "production")

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
