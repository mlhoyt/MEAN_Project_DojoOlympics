import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {
  private url = "http://localhost:8000";
  private socket;

  constructor(
  )
  {
    this.socket = io( this.url );
    //Got question
    this.socket.on( 'new_question', (data) => {
     console.log('Got a new question', data)
   } );
    this.socket.on( 'end_question', () => {
     console.log('end question')
   } );
  }

  // connect() {
  //   console.log( "Debug: SocketService: connect: activated..." );
  //   // let observable = new Observable( observer => {
  //   //   console.log( "Debug: SocketService: connect: inside new Observable callback ..." );
  //   //   this.socket = io( this.url );
  //   //   console.log( "Debug: SocketService: connect: this.url:", this.url );
  //   //   console.log( "Debug: SocketService: connect: this.socket:", this.socket );
  //   //
  //   //   // this.socket.on( "<EVENT>", ( <DATA> ) => { ... } );
  //   //
  //   //   return () => { this.socket.disconnect(); }
  //   // });
  //
  //   console.log( "Debug: SocketService: connect: return:", observable );
  //   return( observable );
  // };

  new_admin() {
    this.socket.emit( 'new_admin' );
  }

  new_user( data ) {
    this.socket.emit( 'new_user', data );
  }

  // Admin send data to users
  send_question = (data) => {
    this.socket.emit( 'new_question', data );
  }

  //User send answer
  update_answer = (data) => {
    this.socket.emit( 'update_answer', data );
  }

  //admin stops all users from answering quetsion
  end_question(){
    this.socket.emit ( 'end_question' );
  }



  // get_clicks(){
  //   let observable = new Observable(observer => {
  //     this.socket = io(this.url)
  //
  //     this.socket.on("update_count", (data) => {
  //       observer.next(data)
  //     })
  //
  //     return () => {
  //       this.socket.disconnect()
  //     }
  //   })
  //
  //   return observable
  // }

  // click_button(){
  //   this.socket.emit("click_button")
  // }
}
