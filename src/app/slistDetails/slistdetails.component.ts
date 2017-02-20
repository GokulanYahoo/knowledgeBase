import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { CommunicatorService } from '../communication/communicator.service';
import { StudentDetail } from '../models/studentDetails';
import { User } from '../models/user';

@Component({
    selector: 'slist-details',
    templateUrl: './slistdetails.component.html',
    providers: [CommunicatorService]
})

export class SListDetailsComponent implements OnInit {

    constructor(private communicatorService: CommunicatorService) {

    }

    private url = "http://localhost:8081/getstudentlist?pageNum=0&size=10";
    studentDet: StudentDetail;
    errorMessage: string;
    response: Response;
    studentDetailsResponse: User[];


    ngOnInit() {
        this.getStudentDetails();
    }

    getStudentDetails() {
        this.communicatorService.getStudents(this.url).subscribe(
            student => {
                this.studentDet = student;
                this.studentDetailsResponse = this.studentDet.studentDetails;
            //console.log('Students details: ' + JSON.stringify({studentDetailsResponse}));
            });
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
