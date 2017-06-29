import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../server-api.service';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user_data:any = {'question_num': 0, 'question_text': ''}
  socket = null;

  constructor(private _socket: SocketService) { }

  ngOnInit() {
    this._socket.userGetsQuestion().subscribe((data) => this.user_data = data)
  }

 
}
