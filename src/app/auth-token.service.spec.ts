import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { AuthTokenService } from './auth-token.service';

describe('AuthToken Service', () => {
  beforeEachProviders(() => [AuthTokenService]);

  it('should ...',
      inject([AuthTokenService], (service: AuthTokenService) => {
    expect(service).toBeTruthy();
  }));
});
