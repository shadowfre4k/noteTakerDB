const notes = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require("../helpers/fsUtils");

notes.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

notes.post("/", (req, res) => {
  let incomingData = req.body;
  let dataToSave = {
    id: uuidv4(),
    title: incomingData.title,
    text: incomingData.text,
  };
  let returnData = readAndAppend(dataToSave, "./db/db.json");
  return res.status(400);
});

notes.delete("/:id", (req, res) => {
  let noteid = req.params.id;
});
module.exports = notes;
