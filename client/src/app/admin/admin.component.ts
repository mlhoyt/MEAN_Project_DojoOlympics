import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../server-api.service';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  all_cats = []
  all_exam = {q_series: []}

  // set show and hide DOM
  exam_selected = true
  team_dispay = false

  exam_cat = ''
  question_num = 0
  teams = [{name: 'user 1', score: 0}, {name: 'user 2', score: 0}, {name: 'user 3', score: 0}]

  constructor(
    private _serverApi: ServerApiService,
    private _socket: SocketService,
  ) {

  }

  ngOnInit() {
    this._serverApi.get_all_categories()
    .then(data => this.all_cats = data)
    .catch(err => console.log('theres a error getting all categories', err))
  }

  get_exam() {
    this._serverApi.get_exam_by_category(this.exam_cat)
    .then(data => this.all_exam = data)
    .catch(err => console.log('theres a error getting all categories', err))
    this.exam_selected = false
    this.team_dispay = true
  }
  send_question() {
    this._socket.send_question({questions_num: this.question_num,
     question_text: this.all_exam.q_series[this.question_num].text
    });
  }
  end_question() {
    this._socket.end_question();
  }

}
