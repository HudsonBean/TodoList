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
  //Variables
  let newId;
  if ((await todos.find()).length == 0) {
    newId = 0;
  } else {
    newId = (await todos.find({}).sort({ _id: -1 }).limit(1))[0]["id"] + 1;
  }

  //Post data
  const data = new todos({
    id: newId,
    content: req.body.content,
  });
  data.save();
  //Response
  res.json(data);
});
