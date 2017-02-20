import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Response } from '@angular/http';
import { CommunicatorService } from '../communication/communicator.service';

import { LoginRequest } from '../models/loginRequest';

@Component({
    selector: 'my-login',
    templateUrl: './login.html'
})

export class LoginComponent {

    constructor(private router: Router, private communicatorService: CommunicatorService) {

    }

    validation = false;
    private url = "http://localhost:8081/login";
    errorMessage: string;
    response: Response;

    validateCredentials(name: string, pass: string) {
        let loginRequest = new LoginRequest();
        loginRequest.userName = name;
        loginRequest.password = pass;
        this.communicatorService.handleService(loginRequest, this.url, 'POST').subscribe(
            response => {
                if (response.ok) {
                    console.log('SList: Login successful');
                    this.router.navigate(['/slist/home']);
                }

                else {
                    this.router.navigate(['/slist/login']);
                }
            },
            error => this.errorMessage = <any>error
        );
    }
}
