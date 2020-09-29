const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  subject: {
    type: String,
    unique: true,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  optionOne: {
    type: String,
    required: true,
  },

  optionTwo: {
    type: String,
    required: true,
  },
  optionThree: {
    type: String,
    required: true,
  },
  optionFour: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = { Quiz };
