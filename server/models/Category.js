// -*- javascript -*-

let mongoose = require('mongoose');

let Schema = mongoose.Schema;

module.exports = function( globals ) {
  let CategorySchema = new mongoose.Schema(
    {
      name: {
        type: String,
        index: true,
        required: true,
        minlength: 1,
      },
    },
    {
      timestamps: true,
    }
  );

  let Category = mongoose.model( 'Category', CategorySchema );
}
