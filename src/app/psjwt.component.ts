import { Component, OnInit, OnChanges, SimpleChange } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { HomeComponent } from './home';
import { ContactComponent } from './contact';
import { AboutComponent } from './about';
import { RegisterComponent } from './register';
import { JobsComponent } from './jobs';
import { PsjwtApiServiceService } from './psjwt-api-service.service';
import { AuthTokenService } from './auth-token.service';
import { UserComponentComponent } from './user-component/user-component.component';

@Component({
  moduleId: module.id,
  selector: 'psjwt-app',
  templateUrl: 'psjwt.component.html',
  styleUrls: ['psjwt.component.css'],
  directives: [ROUTER_DIRECTIVES, UserComponentComponent],
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, PsjwtApiServiceService, AuthTokenService]
})
@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/jobs', component: JobsComponent},
  {path: '/contact', component: ContactComponent},
  {path: '/about', component: AboutComponent},
  {path: '/register', component: RegisterComponent}
])
export class PsjwtAppComponent implements OnInit {
  title = 'Hello World!';
  
  ngOnInit() {
    console.debug('PsjwtAppComponent: onInit');
      
  }
}
