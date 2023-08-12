const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todosSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
});

const todo = mongoose.model("todo", todosSchema);

module.exports = todo;
