// -*- javascript -*-

let bodyParser = require( 'body-parser' );
let path = require( 'path' );

module.exports = function( globals ) {
  // globals.app.use( bodyParser.urlencoded( { extended: true } ) );
  globals.app.use( bodyParser.json() );

  let Category_ctrlr = require( '../controllers/Catgory.js' );

  globals.app.post   ( '/api/categories',     ( req, res ) => Category_ctrlr.create   ( req, res ) );
  globals.app.get    ( '/api/categories',     ( req, res ) => Category_ctrlr.read_all ( req, res ) );
  globals.app.get    ( '/api/categories/:pk', ( req, res ) => Category_ctrlr.read_one ( req, res ) );
  globals.app.put    ( '/api/categories/:pk', ( req, res ) => Category_ctrlr.update   ( req, res ) );
  globals.app.delete ( '/api/categories/:pk', ( req, res ) => Category_ctrlr.delete   ( req, res ) );

  // Default (delegate to front-end router)
  globals.app.all( '*', ( req, res ) => res.sendFile( path.resolve( './client/dist/index.html' ) ) );
}
