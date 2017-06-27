// -*- javascript -*-

let mongoose = require('mongoose');

let Exam = mongoose.model( 'Exam' );

module.exports = {
  create: function( req, res ) {
    let item = new Exam( req.body );
    item.save()
      .catch( err => res.status( 500 ).json( err ) )
      .then( () => res.json( true ) );
  },

  read_all: function( req, res ) {
    Exam.find({})
      .populate('category')
      .populate('q_series')
      // .sort( '{{FIELD_NAME}}|-{{FIELD_NAME}}') // createdAt, -createdAt
      .catch( err => res.status( 500 ).json( err ) )
      .then( data => res.json( data ) );
  },

  read_one: function( req, res ) {
    Exam.findOne({ _id: req.params.pk })
      .populate('category')
      .populate('q_series')
      .catch( err => res.status( 500 ).json( err ) )
      .then( data => res.json( data ) );
  },

  update: function( req, res ) {
    Exam.updateOne({ _id: req.params.pk }, {$set: req.body})
      .catch( err => res.status( 500 ).json( err ) )
      .then( () => res.json( true ) );
  },

  delete: function( req, res ) {
    Exam.remove({ _id: req.params.pk })
      .catch( err => res.status( 500 ).json( err ) )
      .then( () => res.json( true ) );
  },
}
