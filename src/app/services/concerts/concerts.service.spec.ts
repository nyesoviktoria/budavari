import { TestBed } from '@angular/core/testing';

import { concertsService } from './concerts.service';

describe('PreviousConcertsService', () => {
  let service: concertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(concertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
