require("dotenv").config();
const express = require("express");
const parser = require("body-parser");
const mongodb = require("mongodb");
const http = require("http");
const port = 7787;
const cors = require("cors");
const mongoose = require("mongoose");
const { assert } = require("console");
const router = express.Router();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set('useFindAndModify', false);
var Schema = mongoose.Schema;
var app = express();
app.use(cors());
app.use(parser.json({
  limit: "50mb"
}));


var noteSchema = new Schema({
  name: String,
  date: String,
  archive: Boolean,
  image: String,
  label: String,
});

var Note = mongoose.model("Note", noteSchema, "NoteList");

app.route("/").get(function (req, res) {
  res.send("Re:Member - backend API <br/> Developed by Stefan Ungureanu");
});

app.route("/notes").get(function (req, res) {
  Note.find({})
    .sort({ date: -1 })
    .exec(function (err, data) {
      res.send(data);
    });
});

app.post("/notes", (req, res) => {
  const noteObject = req.body;
  noteObject.date = new Date().toISOString();
  noteObject.archive = false;
  noteObject.label = "";

  const myNotes = new Note(noteObject);

  myNotes.save().then((item) => {
    res.send(item);
  });
});

app.delete("/notes/:id", function (req, res, next) {
  Note.findByIdAndRemove({ _id: req.params.id }).then(function (note) {
    res.send(note);
  });
});



app.route("/notes/:id").post(function (req, res) {
  Note.findOneAndUpdate({ _id: req.params.id }, req.body).then(
    function () {
      res.send("Note was updated");
    }
  );
});

app.listen(port);

