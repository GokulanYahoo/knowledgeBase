"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var communicator_service_1 = require("../communication/communicator.service");
var loginRequest_1 = require("../models/loginRequest");
var LoginComponent = (function () {
    function LoginComponent(router, communicatorService) {
        this.router = router;
        this.communicatorService = communicatorService;
        this.validation = false;
        this.url = "http://localhost:8081/login";
    }
    LoginComponent.prototype.validateCredentials = function (name, pass) {
        var _this = this;
        var loginRequest = new loginRequest_1.LoginRequest();
        loginRequest.userName = name;
        loginRequest.password = pass;
        this.communicatorService.handleService(loginRequest, this.url, 'POST').subscribe(function (response) {
            if (response.ok) {
                console.log('SList: Login successful');
                _this.router.navigate(['/slist/home']);
            }
            else {
                _this.router.navigate(['/slist/login']);
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'my-login',
        templateUrl: './login.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, communicator_service_1.CommunicatorService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map