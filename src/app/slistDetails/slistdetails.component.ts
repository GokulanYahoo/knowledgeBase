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

    private initialPageLoadUrl = "http://localhost:8081/getStudentList?pageNum=1&size=20";
    studentDet: StudentDetail;
    errorMessage: string;
    response: Response;
    studentDetailsResponse: User[];


    ngOnInit() {
        this.getStudentDetails(this.initialPageLoadUrl);
    }

    getStudentDetails(pageLoadUrl: string) {
        this.communicatorService.getStudents(pageLoadUrl).subscribe(
            student => {
                this.studentDet = student;
                this.studentDetailsResponse = this.studentDet.studentDetails;
                //console.log('Students details: ' + JSON.stringify(this.studentDetailsResponse));
            });
    }

    getCardBackground(status: string) {
        if (status === 'Present') {
            return "lightskyblue";
        }

        else {
            return "lightgrey";
        }
    }

    pageNum = 2;
    size = 8;
    loadMoreUrl: string;

    loadMore() {        
        this.loadMoreUrl = "http://localhost:8081/getStudentList?pageNum=" + this.pageNum + "&size=" + this.size;
        console.log('Page Load URL: ', this.loadMoreUrl);
        this.getStudentDetails(this.loadMoreUrl);
    }
}
