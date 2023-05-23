import { TestBed } from '@angular/core/testing';

import { ApiCheckerService } from './api-checker.service';

describe('ApiCheckerService', () => {
  let service: ApiCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
