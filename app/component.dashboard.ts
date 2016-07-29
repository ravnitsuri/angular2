import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router'

@Component({
  // template: `Dashboard here!`,
  templateUrl: 'app/templates/dashboard.html',
  directives: [ROUTER_DIRECTIVES]
})
 
export class dashboard { 

	onBack() {
		console.log("Going back in time")
		window.history.back();
	}


}