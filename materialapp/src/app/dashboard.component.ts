import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
    username : string;

  constructor() { 
    this.username = sessionStorage.getItem("uname");
  }

  ngOnInit() {
  }

}
