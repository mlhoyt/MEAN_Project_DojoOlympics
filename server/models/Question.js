// -*- javascript -*-

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

module.exports = function( globals ) {
  let QuestionSchema = new mongoose.Schema(
    {
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
      category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
      },
      topic: {
        type: Schema.Types.ObjectId,
        ref: 'Topic',
      },
    },
    {
      timestamps: true,
    }
  );

  let Question = mongoose.model( 'Question', QuestionSchema );
}
