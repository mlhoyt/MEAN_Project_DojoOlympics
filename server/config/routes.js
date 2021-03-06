// -*- javascript -*-

let bodyParser = require( 'body-parser' );
let path = require( 'path' );

module.exports = function( globals ) {
  // globals.app.use( bodyParser.urlencoded( { extended: true } ) );
  globals.app.use( bodyParser.json() );

  let Category_ctrlr = require( '../controllers/Category.js' );

  globals.app.post   ( '/api/categories',     ( req, res ) => Category_ctrlr.create   ( req, res ) );
  globals.app.get    ( '/api/categories',     ( req, res ) => Category_ctrlr.read_all ( req, res ) );
  globals.app.get    ( '/api/categories/:pk', ( req, res ) => Category_ctrlr.read_one ( req, res ) );
  globals.app.put    ( '/api/categories/:pk', ( req, res ) => Category_ctrlr.update   ( req, res ) );
  globals.app.delete ( '/api/categories/:pk', ( req, res ) => Category_ctrlr.delete   ( req, res ) );

  let Exam_ctrlr = require( '../controllers/Exam.js' );

  globals.app.post   ( '/api/exams',     ( req, res ) => Exam_ctrlr.create   ( req, res ) );
  globals.app.get    ( '/api/exams',     ( req, res ) => Exam_ctrlr.read_all ( req, res ) );
  globals.app.get    ( '/api/exams/:pk', ( req, res ) => Exam_ctrlr.read_one ( req, res ) );
  globals.app.put    ( '/api/exams/:pk', ( req, res ) => Exam_ctrlr.update   ( req, res ) );
  globals.app.delete ( '/api/exams/:pk', ( req, res ) => Exam_ctrlr.delete   ( req, res ) );

  let Question_ctrlr = require( '../controllers/Question.js' );

  globals.app.post   ( '/api/questions',     ( req, res ) => Question_ctrlr.create   ( req, res ) );
  globals.app.get    ( '/api/questions',     ( req, res ) => Question_ctrlr.read_all ( req, res ) );
  globals.app.get    ( '/api/questions/:pk', ( req, res ) => Question_ctrlr.read_one ( req, res ) );
  globals.app.put    ( '/api/questions/:pk', ( req, res ) => Question_ctrlr.update   ( req, res ) );
  globals.app.delete ( '/api/questions/:pk', ( req, res ) => Question_ctrlr.delete   ( req, res ) );

  let mongoose = require('mongoose');

  let Category = mongoose.model( 'Category' );

  globals.app.get ( '/actions/get_all_categories', ( req, res ) => {
    Category.find({})
      .catch( err => res.status( 500 ).json( err ) )
      .then( data => res.json( data ) );
  });

  let Exam = mongoose.model( 'Exam' );

  globals.app.get ( '/actions/get_exam_by_category/:category_id', ( req, res ) => {
    Exam.findOne({ category: req.params.category_id })
      .populate('category')
      .populate('q_series')
      .catch( err => res.status( 500 ).json( err ) )
      .then( data => res.json( data ) );
  });

  // Default (delegate to front-end router)
  globals.app.all( '*', ( req, res ) => res.sendFile( path.resolve( './client/dist/index.html' ) ) );
}
