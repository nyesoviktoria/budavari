import { TestBed } from '@angular/core/testing';

import { RecordsAudioService } from './records-audio.service';

describe('RecordsAudioService', () => {
  let service: RecordsAudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordsAudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
