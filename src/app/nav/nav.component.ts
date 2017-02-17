import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { CommunicatorService } from '../communication/communicator.service';
import { User } from '../models/user';

@Component({
  selector: 'my-nav',
  templateUrl: 'nav.component.html',

})
export class NavComponent implements OnInit {

  constructor(private communicatorService: CommunicatorService) {

  }

  validation = false;

  private url = "http://localhost:9080/login.json";
  users: User[];
  errorMessage: string;
  response: Response;

  ngOnInit() {
    console.log('SList: NavBar load successful');
    this.getStatusCount();
  }

  getStatusCount() {
    var statusCount = 0;
    this.communicatorService.getDtls(this.url).subscribe(
      response => {
        this.users = response.json();
        var i;
      
        for (i = 0; i < this.users.length; i++) {
          if (this.users[i].status === 'present') {
            statusCount = statusCount + 1;
          }
        }

        //console.log('Total present: ', statusCount);

        //return statusCount;
      },
      error => this.errorMessage = <any>error);
      
      return statusCount;
  }
}