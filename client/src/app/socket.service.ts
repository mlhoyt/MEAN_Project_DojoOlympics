import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  private url = 'http://localhost:8000';
  private socket;

  constructor(){}

  userGetsQuestion(){
    let observable = new Observable( observer => {
      console.log( "Debug: SocketService: connect: inside new Observable callback ..." );
      this.socket = io( this.url );
      console.log( "Debug: SocketService: connect: this.url:", this.url );
      console.log( "Debug: SocketService: connect: this.socket:", this.socket );
      // this.socket.on( "<EVENT>", ( <DATA> ) => { ... } );

      // -------------------- ADMIN - RECEIVE --------------------

      this.socket.on( 'new_user', (data) => {
        console.log( 'Debug: SocketService: received: new_user - data:', data );
      });

      this.socket.on( 'update_answer', (data) => {
        console.log( 'Debug: SocketService: received: update_answer - data:', data );
      });

      this.socket.on( 'commit_answer', (data) => {
        console.log( 'Debug: SocketService: received: update_answer - data:', data );
      });

      // -------------------- USER - RECEIVE --------------------

      this.socket.on( 'new_question', (data) => {
        console.log( 'Debug: SocketService: received: new_question - data:', data );
        observer.next(data)
      });

      this.socket.on( 'end_question', () => {
        console.log( 'Debug: SocketService: received: end_question' );
      });

      this.socket.on( 'share_results', ( data ) => {
        console.log( 'Debug: SocketService: received: share_results - data:', data );
      });

      this.socket.on( 'show_standings', ( data ) => {
        console.log( 'Debug: SocketService: received: show_standings - data:', data );
      });

      return () => { this.socket.disconnect(); }
    });
    return observable;
  }

  // -------------------- ADMIN - SEND --------------------

  new_admin() {
    console.log( 'Debug: SocketService: sent: new_admin' );
    this.socket.emit( 'new_admin' );
  }

  send_question( data ) {
    console.log( 'Debug: SocketService: sent: new_question - data:', data );
    this.socket.emit( 'new_question', data );
  }

  end_question() {
    console.log( 'Debug: SocketService: sent: end_question' );
    this.socket.emit ( 'end_question' );
  }

  share_results( data ) {
    console.log( 'Debug: SocketService: sent: share_results - data:', data );
    this.socket.emit ( 'share_results', data );
  }

  show_standings( data ) {
    console.log( 'Debug: SocketService: sent: show_standings - data:', data );
    this.socket.emit ( 'show_standings', data );
  }

  // -------------------- USER - SEND --------------------

  new_user( data ) {
    console.log( 'Debug: SocketService: sent: new_user - data:', data );
    this.socket.emit( 'new_user', data );
  }

  update_answer( data ) {
    console.log( 'Debug: SocketService: sent: update_answer - data:', data );
    this.socket.emit( 'update_answer', data );
  }

  commit_answer( data ) {
    console.log( 'Debug: SocketService: sent: commit_answer - data:', data );
    this.socket.emit( 'commit_answer', data );
  }

}
