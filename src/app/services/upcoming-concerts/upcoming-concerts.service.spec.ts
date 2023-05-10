import { TestBed } from '@angular/core/testing';

import { UpcomingConcertsService } from './upcoming-concerts.service';

describe('UpcomingConcertsService', () => {
  let service: UpcomingConcertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcomingConcertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
