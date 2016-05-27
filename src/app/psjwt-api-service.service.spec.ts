import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PsjwtApiServiceService } from './psjwt-api-service.service';

describe('PsjwtApiService Service', () => {
  beforeEachProviders(() => [PsjwtApiServiceService]);

  it('should ...',
      inject([PsjwtApiServiceService], (service: PsjwtApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
