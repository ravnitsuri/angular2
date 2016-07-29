import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { loginForm } from './component.login'

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  directives: [ROUTER_DIRECTIVES]
})

export class AppComponent { }