require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(process.env.PORT);

//Models
const todos = require("./models/todos");

//Routing
//todos
app.get("/todos", async (req, res) => {
  //Get data
  const data = await todos.find();
  //Response
  res.json(data);
});
app.post("/todos/new", async (req, res) => {
  //Post data
  const data = new todos({
    content: req.body.content,
  });
  data.save();
  //Response
  res.json(data);
});
app.patch("/todos/edit/:id", async (req, res) => {
  //Patch data
  const data = await todos.findByIdAndUpdate(req.params.id, {
    $set: { content: req.body.content },
  });
  //Response
  res.json(data);
});
app.delete("/todos/delete", async (req, res) => {
  //Delete all data
  const data = await todos.deleteMany({});
  //Response
  res.json(data);
});
app.delete("/todos/delete/:id", async (req, res) => {
  //Delete data
  const data = await todos.findByIdAndDelete(req.params.id);
  //Response
  res.json(data);
});
