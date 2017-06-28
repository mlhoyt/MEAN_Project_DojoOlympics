// -*- javascript -*-

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

module.exports = function( globals ) {
  let ExamSchema = new mongoose.Schema(
    {
      category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
      },
      q_series: [{
        type: Schema.Types.ObjectId,
        ref: 'Question',
        default: [],
      }]
    },
    {
      timestamps: true,
    }
  );

  let Exam = mongoose.model( 'Exam', ExamSchema );
}
