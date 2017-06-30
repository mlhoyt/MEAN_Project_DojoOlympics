import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../server-api.service';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  //create and destory parts
  show = false
  noShow = true

  user_data: any = { 'question_num': 0, 'question_text': '', 'question_end': false, 'correct': 0, 'score': 0};
  answer_text = "";
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

  update_answer() {
    console.log( "Debug: UserComponent: update_answer: answer_text:", this.answer_text );
    this._socket.update_answer({
      answer: this.answer_text,
    });
  }
  commit_answer() {
    console.log( "Debug: UserComponent: commit_answer: answer_text:", this.answer_text );
    this._socket.commit_answer({
      answer: this.answer_text,
    });
    this.user_data.question_end = true;
  }
  


}
