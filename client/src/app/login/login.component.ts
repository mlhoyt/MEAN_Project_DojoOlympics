import { Component, OnInit } from '@angular/core';
import { ServerApiService } from './../server-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _http: ServerApiService,
    private _router: Router,
  ) {

  }

  ngOnInit() {
  }



}
