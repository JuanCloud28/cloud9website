import { TestBed } from '@angular/core/testing';

import { StaffRequestService } from './staff-request.service';

describe('StaffRequestService', () => {
  let service: StaffRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
