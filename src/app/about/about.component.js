"use strict";
var core_1 = require("@angular/core");
var communicator_service_1 = require("../communication/communicator.service");
var AboutComponent = (function () {
    function AboutComponent(communicatorService) {
        this.communicatorService = communicatorService;
        //private url = "https://jsonplaceholder.typicode.com/posts";
        //private url = "http://localhost:8081/getstudentlist?pageNum=1&size=3";
        this.url = "http://localhost:9080/login.json";
        // Do stuff 
    }
    AboutComponent.prototype.ngOnInit = function () {
        console.log('Hello About');
        this.userDtlsDisplay();
        //this.userDtlsSubmit();
    };
    AboutComponent.prototype.userDtlsDisplay = function () {
        var _this = this;
        this.communicatorService.getDtls(this.url).subscribe(function (response) { _this.users = response.json(); console.log("All:::::: " + _this.users[0].studentName); }, function (error) { return _this.errorMessage = error; });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'my-about',
        templateUrl: './about.component.html',
        styleUrls: ['./about.component.scss']
    }),
    __metadata("design:paramtypes", [communicator_service_1.CommunicatorService])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map