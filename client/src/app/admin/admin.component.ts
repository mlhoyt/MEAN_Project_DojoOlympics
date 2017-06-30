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

  admin_data: any = {
    teams: [
    ],
  };



  constructor(
    private _serverApi: ServerApiService,
    private _socket: SocketService,
  ) {
    console.log( "Debug: AdminComponent: constructor: activated" );
    this._socket.setup().subscribe( data => this.admin_data = data );
  }

  ngOnInit() {
    console.log( "Debug: AdminComponent: ngOnInit: activated" );
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
    this._socket.send_question({
      question_num: this.question_num,
      question_text: this.all_exam.q_series[this.question_num].text,
    });
  }

  end_question() {
    this._socket.end_question();
  }

  next_question() {
    //send admin_data
    this._socket.share_results(this.admin_data)
    //update score
    //rest commit, answer, correct
    for( let i in this.admin_data.teams ) {
      let team = this.admin_data.teams[ i ];
      team.score += team.correct;
      console.log(team.score);

      team.answer = "";
      team.commit = false;
      team.correct = 0;
    }
    //loop to next question
    this.question_num += 1;
    
  }

  correct_answer(team_sid) {
    for( let i in this.admin_data.teams ) {
      let team = this.admin_data.teams[ i ];
      if (team.sid == team_sid){
        team.correct = 1;
        break;
      }
    }
  }

  finished() {
    this._socket.share_results(this.admin_data)
    let standing =[]
    for( let i in this.admin_data.teams ) {
      let team = this.admin_data.teams[ i ];
      standing.push({'team':team.name, 'score':team.score})
    }
    //sort
    standing.sort((a,b) => a.score - b.score);
    //pass to server
    this._socket.show_standings({standing:standing})
    //send admin_data
    
    // total up score
  }



}
