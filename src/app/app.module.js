"use strict";
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var login_component_1 = require("./login/login.component");
var contact_component_1 = require("./contact/contact.component");
var slistdetails_component_1 = require("./slistDetails/slistdetails.component");
var app_routing_1 = require("./app.routing");
var communicator_service_1 = require("./communication/communicator.service");
var hmr_1 = require("@angularclass/hmr");
var api_service_1 = require("./shared/api.service");
var app_filter_1 = require("./app.filter");
var core_2 = require("@angular/core");
var nav_component_1 = require("./nav/nav.component");
var truncate_1 = require("./util/truncate");
var AppModule = (function () {
    function AppModule(appRef) {
        this.appRef = appRef;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        console.log('HMR store', store);
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // recreate elements
        store.disposeOldHosts = hmr_1.createNewHosts(cmpLocation);
        // remove styles
        hmr_1.removeNgStyles();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent, home_component_1.HomeComponent,
            about_component_1.AboutComponent, contact_component_1.ContactComponent, login_component_1.LoginComponent, slistdetails_component_1.SListDetailsComponent, app_filter_1.FilterPipe, nav_component_1.NavComponent, truncate_1.StringTruncatePipe
        ],
        providers: [
            api_service_1.ApiService,
            communicator_service_1.CommunicatorService
        ],
        bootstrap: [app_component_1.AppComponent],
        schemas: [core_2.CUSTOM_ELEMENTS_SCHEMA],
    }),
    __metadata("design:paramtypes", [core_1.ApplicationRef])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map