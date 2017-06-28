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

  new_user( data ) {
    this.socket.emit( 'new_user', data );
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
