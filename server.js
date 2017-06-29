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

// ----------------------------------------------------------------------
// SOCKET COMMUNICATION
// ----------------------------------------------------------------------
const io = require( 'socket.io' ).listen( server );

// Store admin socket id
let admin_id = "";

// Temporarily store users that connect before admin
let user_backlog = [];

io.on( 'connection', ( socket ) => {
	console.log("Debug: Server: new socket connection:", socket.id );
  // We talked about storing team names and associated scores in session
  // - In the demo it was just stored in globals.app... a bad practice?

	// - client-to-server P2P Communication
	// socket.emit( '{{SERVER_EVENT_NAME}}', {{EVENT_DATA}}* );
	// - Broadcast Communication
	// socket.broadcast.emit( '{{SERVER_EVENT_NAME}}', {{EVENT_DATA}}* );
	// - Blast Communication
	// io.emit( '{{SERVER_EVENT_NAME}}', {{EVENT_DATA}}* );

	socket.on( 'new_admin', ( ) => {
    console.log( "Debug: Server: received socket event 'new_admin' with socket.id:", socket.id);
		admin_id = socket.id;
    console.log( "Debug: Server: processing user_backlog:" );
    for( let user in user_backlog ) {
			socket.emit( "new_user", user_backlog[ user ] );
      console.log( "Debug: Server: sent socket event 'new_user' to admin(", admin_id, ") with data:", user_backlog[ user ] );
    }
  });

	socket.on( 'new_user', ( data ) => {
    console.log( "Debug: Server: received socket event 'new_user' with data:", data );
		if( admin_id ) {
			socket.to( admin_id ).emit( "new_user", data );
      console.log( "Debug: Server: sent socket event 'new_user' to admin(", admin_id, ") with data:", data );
		} else {
			user_backlog.push( data );
      console.log( "Debug: Server: stored 'new_user' to user_backlog:", data );
		}
  });

	socket.on( 'new_question', ( data ) => {
    console.log( "Debug: Server: received socket event 'new_question' with data:", data );
		socket.broadcast.emit( "new_question", data );
    console.log( "Debug: Server: sent socket event 'new_question' to all users with data:", data );
  });

	socket.on( 'update_answer', ( data ) => {
		console.log( "Debug: Server: received socket event 'update_answer' with data:", data );
		socket.to( admin_id ).emit( "update_answer", data );
    console.log( "Debug: Server: sent socket event 'update_answer' to admin(", admin_id, ") with data:", data );
	});

	socket.on( 'commit_answer', ( data ) => {
		console.log( "Debug: Server: received socket event 'commit_answer' with data:", data );
		socket.to( admin_id ).emit( "commit_answer", data );
    console.log( "Debug: Server: sent socket event 'commit_answer' to admin(", admin_id, ") with data:", data );
	});

	socket.on( 'end_question', () => {
    console.log( "Debug: Server: received socket event 'end_question'" );
		socket.broadcast.emit( "end_question" );
    console.log( "Debug: Server: sent socket event 'end_question' to all users" );
  });

	socket.on( 'share_results', ( data ) => {
		console.log( "Debug: Server: received socket event 'share_results' with data:", data );
		socket.broadcast.emit( "share_results", data );
    console.log( "Debug: Server: sent socket event 'share_results' to all users with data:", data );
	});

	socket.on( 'show_standings', ( data ) => {
		console.log( "Debug: Server: received socket event 'show_standings' with data:", data );
		socket.broadcast.emit( "show_standings", data );
    console.log( "Debug: Server: sent socket event 'show_standings' to all users with data:", data );
	});
});
