import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { PsjwtAppComponent, environment } from './app/';

if (environment.production) {
  console.log('prod');
  enableProdMode();
}
else {
  console.log('dev');
}

bootstrap(PsjwtAppComponent);

