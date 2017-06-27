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

  let Topic_ctrlr = require( '../controllers/Topic.js' );

  globals.app.post   ( '/api/topics',     ( req, res ) => Topic_ctrlr.create   ( req, res ) );
  globals.app.get    ( '/api/topics',     ( req, res ) => Topic_ctrlr.read_all ( req, res ) );
  globals.app.get    ( '/api/topics/:pk', ( req, res ) => Topic_ctrlr.read_one ( req, res ) );
  globals.app.put    ( '/api/topics/:pk', ( req, res ) => Topic_ctrlr.update   ( req, res ) );
  globals.app.delete ( '/api/topics/:pk', ( req, res ) => Topic_ctrlr.delete   ( req, res ) );

  let Exam_ctrlr = require( '../controllers/Exam.js' );

  globals.app.post   ( '/api/exams',     ( req, res ) => Exam_ctrlr.create   ( req, res ) );
  globals.app.get    ( '/api/exams',     ( req, res ) => Exam_ctrlr.read_all ( req, res ) );
  globals.app.get    ( '/api/exams/:pk', ( req, res ) => Exam_ctrlr.read_one ( req, res ) );
  globals.app.put    ( '/api/exams/:pk', ( req, res ) => Exam_ctrlr.update   ( req, res ) );
  globals.app.delete ( '/api/exams/:pk', ( req, res ) => Exam_ctrlr.delete   ( req, res ) );

  // Default (delegate to front-end router)
  globals.app.all( '*', ( req, res ) => res.sendFile( path.resolve( './client/dist/index.html' ) ) );
}
