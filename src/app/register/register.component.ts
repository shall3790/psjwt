import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PsjwtApiServiceService } from '../psjwt-api-service.service';
import { AuthTokenService } from '../auth-token.service';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
  private email: string;
  private password: string;
  
  constructor(private _service: PsjwtApiServiceService, 
              private _authToken: AuthTokenService,
              private _router: Router) {
    
  }

  ngOnInit() {
    console.debug('Register component init...')
  }

  register(): void {
    console.debug('register');
    this._service.register(this.email, this.password)
      .subscribe(data => {
        let token = data.token;
        let user = data.user;
        this._authToken.setToken(token);
        
        console.debug('data: ' + JSON.stringify(data));
        
        this._router.navigate(['/home']);
      },error => {
        console.error(error);
      });
  }
}
