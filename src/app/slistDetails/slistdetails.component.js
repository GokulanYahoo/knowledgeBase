"use strict";
var core_1 = require("@angular/core");
var communicator_service_1 = require("../communication/communicator.service");
var SListDetailsComponent = (function () {
    function SListDetailsComponent(communicatorService) {
        this.communicatorService = communicatorService;
        //private url = "http://localhost:9080/login.json";
        this.url = "http://localhost:8081/getstudentlist?pageNum=0&size=3";
    }
    SListDetailsComponent.prototype.ngOnInit = function () {
        this.getStudentDetails();
    };
    SListDetailsComponent.prototype.getStudentDetails = function () {
        var _this = this;
        this.communicatorService.getStudents(this.url).subscribe(function (student) { return _this.studentDet = student; });
        console.log('Students details: ' + this.studentDet);
    };
    SListDetailsComponent.prototype.getCardBackground = function (status) {
        if (status === 'Present') {
            return "lightskyblue";
        }
        else {
            return "lightblue";
        }
    };
    return SListDetailsComponent;
}());
SListDetailsComponent = __decorate([
    core_1.Component({
        selector: 'slist-details',
        templateUrl: './slistdetails.component.html',
        providers: [communicator_service_1.CommunicatorService]
    }),
    __metadata("design:paramtypes", [communicator_service_1.CommunicatorService])
], SListDetailsComponent);
exports.SListDetailsComponent = SListDetailsComponent;
//# sourceMappingURL=slistdetails.component.js.map