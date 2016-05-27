import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { HomeComponent } from './home';
import { ContactComponent } from './contact';
import { AboutComponent } from './about';
import { RegisterComponent } from './register';
import { PsjwtApiServiceService } from './psjwt-api-service.service';

@Component({
  moduleId: module.id,
  selector: 'psjwt-app',
  templateUrl: 'psjwt.component.html',
  styleUrls: ['psjwt.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, ROUTER_PROVIDERS, PsjwtApiServiceService,]
})
@Routes([
  {path: '/home', component: HomeComponent},
  {path: '/contact', component: ContactComponent},
  {path: '/about', component: AboutComponent},
  {path: '/register', component: RegisterComponent}
])
export class PsjwtAppComponent {
  title = 'Hello World!';
}
