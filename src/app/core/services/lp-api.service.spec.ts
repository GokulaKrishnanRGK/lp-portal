import { TestBed } from '@angular/core/testing';

import { LpApiService } from './lp-api.service';

describe('LpApiService', () => {
  let service: LpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
