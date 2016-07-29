"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var loginForm = (function () {
    function loginForm(_router) {
        this._router = _router;
        this.data = {};
    }
    ;
    loginForm.prototype.formSubmit = function () {
        console.log(this.data);
        if (this.data.username == "admin" && this.data.password == "admin") {
            console.log("Admin login!");
            this._router.navigate(['/dashboard']);
        }
        else {
            console.log("You're not an admin bro");
        }
    };
    loginForm = __decorate([
        core_1.Component({
            // template: `My Login!
            // <br> <a [routerLink]="['/dashboard']"> Dashboard </a>`,
            templateUrl: 'app/templates/login.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], loginForm);
    return loginForm;
}());
exports.loginForm = loginForm;
//# sourceMappingURL=component.login.js.map