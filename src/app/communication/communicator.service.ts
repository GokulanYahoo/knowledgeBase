import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { StudentDetail } from '../models/studentDetails';

@Injectable()
export class CommunicatorService {
    constructor(private http: Http) { }

    getDtls(url: string): Observable<Response> {
        return this.http.get(url)
            .map((response: Response) => response)
            .catch(this.handleError);
    }

    private handleError(error: any) {

        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    handleService(data: any, url: string, submitType: string): Observable<Response> {
        let body = data;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let resultObservables: Observable<Response>;
        submitType = submitType.toUpperCase();
        switch (submitType) {
            case "POST":
                resultObservables = this.http.post(url, body, options)
                    .map((response: Response) => response)
                    .catch(this.handleError);
                break;
            case "PUT":
                resultObservables = this.http.put(url, body, options)
                    .map((response: Response) => response)
                    .catch(this.handleError);
                break;
        }

        return resultObservables;
    }

    getStudents(url:string) : Observable<StudentDetail>{
        return this.http.get(url)
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }
}