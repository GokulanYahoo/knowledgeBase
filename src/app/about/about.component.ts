import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { CommunicatorService } from '../communication/communicator.service';
import { User } from '../models/user';


@Component({
    selector: 'my-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    //private url = "https://jsonplaceholder.typicode.com/posts";
    //private url = "http://localhost:8081/getstudentlist?pageNum=1&size=3";
    private url = "http://localhost:9080/login.json";
    /* private postUrl="http://httpbin.org/post"; */
    users: User[];
    errorMessage: string;
    str: string;
    response: Response;
    constructor(private communicatorService: CommunicatorService) {
        // Do stuff 
    }

    ngOnInit() {
        console.log('Hello About');
        this.userDtlsDisplay();
        //this.userDtlsSubmit();
    }

    userDtlsDisplay() {
        this.communicatorService.getDtls(this.url).subscribe(
            response => { this.users = response.json(); console.log("All:::::: " + this.users[0].studentName) },
            error => this.errorMessage = <any>error);
    }
}
