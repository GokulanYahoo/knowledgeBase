import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { CommunicatorService } from '../communication/communicator.service';
import { StudentDetail } from '../models/studentDetails';


@Component({
    selector: 'slist-details',
    templateUrl: './slistdetails.component.html',
    providers: [CommunicatorService]
})

export class SListDetailsComponent implements OnInit {

    constructor(private communicatorService: CommunicatorService) {

    }

    //private url = "http://localhost:9080/login.json";
    private url = "http://localhost:8081/getstudentlist?pageNum=0&size=3";
    studentDet: StudentDetail;
    errorMessage: string;
    response: Response;
    
    ngOnInit() {
        this.getStudentDetails();   
    }

    getStudentDetails() {
        this.communicatorService.getStudents(this.url).subscribe(
            student => this.studentDet = student);
            console.log('Students details: ' + this.studentDet);
    }

    getCardBackground(status: string) {
        if (status === 'Present') {
            return "lightskyblue";
        }

        else {
            return "lightblue";
        }
    }
}