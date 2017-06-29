import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../server-api.service';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user_data: any = { 'question_num': 0, 'question_text': '' };
  socket = null;

  constructor(
    private _socket: SocketService,
  )
  {
    console.log( "Debug: UserComponent: constructor: activated" );
    this._socket.setup().subscribe( data => this.user_data = data );
  }

  ngOnInit() {
    console.log( "Debug: UserComponent: ngOnInit: activated" );
  }
}
