"use strict";
var router_1 = require('@angular/router');
var component_login_1 = require('./component.login');
var component_dashboard_1 = require('./component.dashboard');
var routes = [
    {
        path: '',
        component: component_login_1.loginForm
    },
    {
        path: 'dashboard',
        component: component_dashboard_1.dashboard
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.router.js.map