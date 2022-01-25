import { TestBed } from '@angular/core/testing';

import { ListTrackerService } from './list-tracker.service';

describe('ListTrackerService', () => {
  let service: ListTrackerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListTrackerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
