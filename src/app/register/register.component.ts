import { Component, OnInit } from '@angular/core';
import { PsjwtApiServiceService } from '../psjwt-api-service.service';
@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _service: PsjwtApiServiceService) {
    
  }

  ngOnInit() {
    console.debug('Register component init...')
  }

  register(): void {
    console.debug('register');
    this._service.register('stephen')
      .subscribe(data => {
        console.debug('data: ' + data);
      },error => {
        console.error(error);
      });
  }
}
