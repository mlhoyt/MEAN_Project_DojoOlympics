// -*- javascript -*-

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

module.exports = function( globals ) {
  let TopicSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        index: true,
        required: true,
        minlength: 1,
      }
    },
    {
      timestamps: true,
    }
  );

  let Topic = mongoose.model( 'Topic', TopicSchema );
}
