import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'my-nav',
  templateUrl: 'nav.component.html',

})
export class NavComponent implements OnInit {

  /* constructor() {

  } */


  validation = false;

  errorMessage: string;
  response: Response;
  userName: string;

  ngOnInit() {
    this.userName = localStorage.getItem('userName');
    console.log('SList: Logged in as ', this.userName);
    console.log('SList: NavBar load successful');
  }
}
