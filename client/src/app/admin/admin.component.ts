import { Component, OnInit } from '@angular/core';
import { ServerApiService } from '../server-api.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    private _serverApi: ServerApiService
  ) {

  }

  ngOnInit() {
    
  }

}
