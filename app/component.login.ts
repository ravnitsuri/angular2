import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES , Router} from '@angular/router'

@Component({
  // template: `My Login!
  				// <br> <a [routerLink]="['/dashboard']"> Dashboard </a>`,
  templateUrl : 'app/templates/login.html',
  directives: [ROUTER_DIRECTIVES]
})
 
export class loginForm { 

	data:object = {};
	constructor (private _router: Router) {} ;

	formSubmit() {
		console.log(this.data);
		if (this.data.username == "admin" && this.data.password == "admin") {
			console.log("Admin login!")
			this._router.navigate(['/dashboard'])
		} else {
			console.log("You're not an admin bro")
		}
	}
}