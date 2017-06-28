// -*- javascript -*-

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

module.exports = function( globals ) {
  let QuestionSchema = new mongoose.Schema(
    {
      topic: {
        type: String,
        required: true,
        minlength: 1,
      },
      text: {
        type: String,
        required: true,
        minlength: 1,
      },
      answer: {
        type: String,
        required: true,
        minlength: 1,
      },
    },
    {
      timestamps: true,
    }
  );

  let Question = mongoose.model( 'Question', QuestionSchema );
}
