require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATABASE_URl, {
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
  const data = todos.find();
  //Response
  console.log(data);
  res.json(data);
});
