import { TestBed } from '@angular/core/testing';

import { ConcertsService } from './concerts.service';

describe('PreviousConcertsService', () => {
  let service: ConcertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
