require("dotenv").config();
const express = require("express");
const parser = require("body-parser");
const mongodb = require("mongodb");
const http = require("http");
const port = 7787;
const cors = require("cors");
const mongoose = require("mongoose");
const { isObject } = require("util");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var Schema = mongoose.Schema;
var app = express();
app.use(cors());
app.use(parser.json());

var noteSchema = new Schema({
  name: String,
  date: String,
  ceva: String,
});

var Note = mongoose.model("Note", noteSchema, "NoteList");

app.route("/").get(function (req, res) {
  res.send("Re:Member - backend API <br/> Developed by Stefan Ungureanu");
});

app.route("/notes").get(function (req, res) {
  Note.find({}, function (err, data) {
    res.send(data);
  });
});

app.post("/notes", (req, res) => {
  const noteObject = req.body;
  noteObject.date = new Date().toISOString();
  const myNotes = new Note(noteObject);

  myNotes.save().then((item) => {
    res.send("Note saved to database");
  });
});

app.listen(port);
