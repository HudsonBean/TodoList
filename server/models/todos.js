const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todosSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
});

const todo = mongoose.model("todo", todosSchema);

module.exports = todo;
