import { Component, OnInit } from '@angular/core';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_name = "";

  constructor(
    private _socket: SocketService,
  )
  {
  }

  ngOnInit() {
    // this._socket.connect();
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
