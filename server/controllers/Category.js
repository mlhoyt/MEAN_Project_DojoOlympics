// -*- javascript -*-

let mongoose = require('mongoose');

let Category = mongoose.model( 'Category' );

module.exports = {
  create: function( req, res ) {
    let item = new Category( req.body );
    item.save()
      .catch( err => res.status( 500 ).json( err ) )
      .then( () => res.json( true ) );
  },

  read_all: function( req, res ) {
    Category.find({})
      // .sort( '{{FIELD_NAME}}|-{{FIELD_NAME}}') // createdAt, -createdAt
      .catch( err => res.status( 500 ).json( err ) )
      .then( data => res.json( data ) );
  },

  read_one: function( req, res ) {
    Category.findOne({ name: req.params.pk })
      .catch( err => res.status( 500 ).json( err ) )
      .then( data => res.json( data ) );
  },

  update: function( req, res ) {
    Category.updateOne({ name: req.params.pk }, {$set: req.body})
      .catch( err => res.status( 500 ).json( err ) )
      .then( () => res.json( true ) );
  },

  delete: function( req, res ) {
    Category.remove({ name: req.params.pk })
      .catch( err => res.status( 500 ).json( err ) )
      .then( () => res.json( true ) );
  },
}
