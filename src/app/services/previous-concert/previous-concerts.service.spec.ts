import { TestBed } from '@angular/core/testing';

import { PreviousConcertsService } from './previous-concerts.service';

describe('PreviousConcertsService', () => {
  let service: PreviousConcertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviousConcertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
