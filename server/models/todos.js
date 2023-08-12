const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todosSchema = new Schema({
  id: {
    type: Number,
  },
  content: {
    type: String,
    required: true,
  },
});

const todo = mongoose.model("todo", todosSchema);

module.exports = todo;
