"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var contact_component_1 = require("./contact/contact.component");
var login_component_1 = require("./login/login.component");
var slistdetails_component_1 = require("./slistDetails/slistdetails.component");
var routes = [
    { path: 'slist/login', component: login_component_1.LoginComponent }, { path: '', redirectTo: '/slist/login', pathMatch: 'full' },
    { path: 'slist/logout', component: login_component_1.LoginComponent },
    //,{path:'slist/',redirectTo:'/slist/login',pathMatch:'full'},
    { path: 'slist/contact', component: contact_component_1.ContactComponent },
    { path: 'slist/home', component: home_component_1.HomeComponent,
        children: [
            { path: '', redirectTo: 'details', pathMatch: 'full' },
            { path: 'details', component: slistdetails_component_1.SListDetailsComponent }
        ] },
    { path: 'slist/about', component: about_component_1.AboutComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map