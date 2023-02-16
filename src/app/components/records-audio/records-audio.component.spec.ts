import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsAudioComponent } from './records-audio.component';

describe('RecordsAudioComponent', () => {
  let component: RecordsAudioComponent;
  let fixture: ComponentFixture<RecordsAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsAudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordsAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
