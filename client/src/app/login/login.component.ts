import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../server-api.service';
import { Router } from '@angular/router';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_name = "";

  constructor(
    private _http: ServerApiService,
    private _router: Router,
    private _socket: SocketService,
  )
  {
  }

  ngOnInit() {
    // this._socket.connect();
  }

  newAdmin() {
      console.log( "Debug: LoginComponent: newAdmin: sending socket event 'new_admin'" );
      this._socket.new_admin();
      this._router.navigate(["/admin"]);
  }

  doSendUserName() {
    if( this.user_name != "" ) {
      console.log( "Debug: LoginComponent: doSendUserName: sending socket event 'new_user'" );
      this._socket.new_user( { user_name: this.user_name } );
    }
    else {
      console.log( "Debug: LoginComponent: doSendUserName: ignoring click event with empty user_name" );
    }
  }
}
