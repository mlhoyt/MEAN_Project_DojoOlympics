// -*- javascript -*-

// ----------------------------------------------------------------------
// DEPENDENCIES
// ----------------------------------------------------------------------
let express = require( 'express' );
let session = require( 'express-session' );

// ----------------------------------------------------------------------
// GLOBALS
// ----------------------------------------------------------------------
let globals = {};

globals.DB_SERVER_PATH = 'localhost';
globals.DB_NAME = 'DojoOlympics';

// globals.{{DATA}}_TYPES: Array<string> = [ ... ];

globals.WEB_SERVER_PORT = 8000;

globals.app = express();

globals.app.use( session({
  secret: 'NodeJS-Express Project Session Secret',
  resave: false,
  saveUninitialized: true
}));

// ----------------------------------------------------------------------
// MVC:MODELS
// ----------------------------------------------------------------------
require( './server/config/models.js' )( globals );

// ----------------------------------------------------------------------
// MVC:VIEWS
// ----------------------------------------------------------------------
require( './server/config/views.js' )( globals );

// ----------------------------------------------------------------------
// MVC:CONTROLLERS
// ----------------------------------------------------------------------
require( './server/config/routes.js' )( globals );

// ----------------------------------------------------------------------
// WEB SERVER
// ----------------------------------------------------------------------
const server = globals.app.listen( globals.WEB_SERVER_PORT, function() {
    console.log( 'Server listening on port', globals.WEB_SERVER_PORT ); // INFO
});

const io = require( 'socket.io' ).listen( server );

io.on( 'connection', ( socket ) => {
	console.log("Debug: New socket connection:", socket.id );
  // We talked about storing team names and associated scores in session
  // - In the demo it was just stored in globals.app... a bad practice?

	// - P2P Communication
	// socket.emit( '{{SERVER_EVENT_NAME}}', {{EVENT_DATA}}* );
	// - Broadcast Communication
	// socket.broadcast.emit( '{{SERVER_EVENT_NAME}}', {{EVENT_DATA}}* );
	// - Blast Communication
	// io.emit( '{{SERVER_EVENT_NAME}}', {{EVENT_DATA}}* );

	// socket.on( '{{CLIENT_EVENT_NAME}}', () => {
	// })
});
