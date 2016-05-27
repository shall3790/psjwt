import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PsjwtAppComponent } from '../app/psjwt.component';

beforeEachProviders(() => [PsjwtAppComponent]);

describe('App: Psjwt', () => {
  it('should create the app',
      inject([PsjwtAppComponent], (app: PsjwtAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'psjwt works!\'',
      inject([PsjwtAppComponent], (app: PsjwtAppComponent) => {
    expect(app.title).toEqual('psjwt works!');
  }));
});
