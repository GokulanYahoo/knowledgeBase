"use strict";
var core_1 = require("@angular/core");
var communicator_service_1 = require("../communication/communicator.service");
var NavComponent = (function () {
    function NavComponent(communicatorService) {
        this.communicatorService = communicatorService;
        this.validation = false;
        this.url = "http://localhost:9080/login.json";
    }
    NavComponent.prototype.ngOnInit = function () {
        console.log('SList: NavBar load successful');
        this.getStatusCount();
    };
    NavComponent.prototype.getStatusCount = function () {
        var _this = this;
        var statusCount = 0;
        this.communicatorService.getDtls(this.url).subscribe(function (response) {
            _this.users = response.json();
            var i;
            for (i = 0; i < _this.users.length; i++) {
                if (_this.users[i].status === 'present') {
                    statusCount = statusCount + 1;
                }
            }
            //console.log('Total present: ', statusCount);
            //return statusCount;
        }, function (error) { return _this.errorMessage = error; });
        return statusCount;
    };
    return NavComponent;
}());
NavComponent = __decorate([
    core_1.Component({
        selector: 'my-nav',
        templateUrl: 'nav.component.html',
    }),
    __metadata("design:paramtypes", [communicator_service_1.CommunicatorService])
], NavComponent);
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map