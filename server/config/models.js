// -*- javascript -*-

let mongoose = require('mongoose');
let fs = require('fs');
let path = require('path');

module.exports = function( globals ) {
  let mongoose_uri = 'mongodb://' + globals.DB_SERVER_PATH + '/' + globals.DB_NAME;

  mongoose.Promise = global.Promise;

  mongoose.connect(
    mongoose_uri
    // mongoose_uri,
    // {
    //   useMongoClient: true,
    // }
  );

  let models_path = path.join( __dirname, './../models' );

  fs.readdirSync( models_path ).forEach( function( file ) {
    if( file.indexOf( '.js' ) >= 0 ) {
      // require the file (this runs the model file which registers the schema)
      require( models_path + '/' + file )( globals );
    }
  });
}
