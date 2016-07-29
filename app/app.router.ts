import { provideRouter, RouterConfig }  from '@angular/router';
import { loginForm } from './component.login';
import { dashboard } from './component.dashboard';

const routes: RouterConfig = [
  {
    path: '',
    component: loginForm
  }, 
  {
  	path: 'dashboard',
  	component: dashboard
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];