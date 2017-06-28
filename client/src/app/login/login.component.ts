import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ServerApiService } from './../server-api.service';
import {Router} from '@angular/router';
=======
import { SocketService } from '../socket.service';
>>>>>>> master

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_name = "";

  constructor(
<<<<<<< HEAD
    private _http: ServerApiService,
    private _router: Router,
  ) {

=======
    private _socket: SocketService,
  )
  {
>>>>>>> master
  }

  ngOnInit() {
    // this._socket.connect();
  }

<<<<<<< HEAD


=======
  doSendUserName() {
    if( this.user_name != "" ) {
      console.log( "Debug: LoginComponent: doSendUserName: sending socket event 'new_user'" );
      this._socket.new_user( { user_name: this.user_name } );
    }
    else {
      console.log( "Debug: LoginComponent: doSendUserName: ignoring click event with empty user_name" );
    }
  }
>>>>>>> master
}
