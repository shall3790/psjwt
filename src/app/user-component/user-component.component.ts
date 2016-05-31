import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import { AuthTokenService } from '../auth-token.service';

@Component({
  //moduleId: module.id,
  selector: 'app-user-component',
  templateUrl: 'app/user-component/user-component.component.html',
  styleUrls: ['app/user-component/user-component.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class UserComponentComponent implements OnInit, OnChanges {
  isAuthenticated: boolean = false;
  
  constructor(private _authToken: AuthTokenService,
              private _router: Router) {
    _authToken.auth$.subscribe((auth: boolean) => {
      console.debug('received event in user component: '+ auth);
      this.isAuthenticated = auth;  
    });
  }

  ngOnInit() {
    console.debug('UserComponent: onInit');
    this.isAuthenticated = this._authToken.isAuthenticated();
      
  }
  
  ngOnChanges(changes: {[propKey:string]: SimpleChange}){
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let from = JSON.stringify(changedProp.previousValue);
      let to =   JSON.stringify(changedProp.currentValue);
      log.push( `${propName} changed from ${from} to ${to}`);
    }
    
    //this.changeLog.push(log.join(', '));
  }
  
  logout(): void {
    console.debug('logout, removing token');
    this._authToken.removeToken();  
    //redirect
    this._router.navigate(['/home']);
  }
}
