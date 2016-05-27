import { Component } from '@angular/core';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { HomeComponent } from './home';
import { ContactComponent } from './contact';
import { AboutComponent } from './about';
import { RegisterComponent } from './register';

@Component({
  moduleId: module.id,
  selector: 'psjwt-app',
  templateUrl: 'psjwt.component.html',
  styleUrls: ['psjwt.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
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
