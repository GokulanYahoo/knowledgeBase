"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var http_2 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
var CommunicatorService = (function () {
    function CommunicatorService(http) {
        this.http = http;
    }
    CommunicatorService.prototype.getDtls = function (url) {
        return this.http.get(url)
            .map(function (response) { return response; })
            .catch(this.handleError);
    };
    CommunicatorService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    CommunicatorService.prototype.handleService = function (data, url, submitType) {
        var body = data;
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        var resultObservables;
        submitType = submitType.toUpperCase();
        switch (submitType) {
            case "POST":
                resultObservables = this.http.post(url, body, options)
                    .map(function (response) { return response; })
                    .catch(this.handleError);
                break;
            case "PUT":
                resultObservables = this.http.put(url, body, options)
                    .map(function (response) { return response; })
                    .catch(this.handleError);
                break;
        }
        return resultObservables;
    };
    CommunicatorService.prototype.getStudents = function (url) {
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    return CommunicatorService;
}());
CommunicatorService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CommunicatorService);
exports.CommunicatorService = CommunicatorService;
//# sourceMappingURL=communicator.service.js.map