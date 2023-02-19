import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertsPreviousComponent } from './concerts-previous.component';

describe('ConcertsPreviousComponent', () => {
  let component: ConcertsPreviousComponent;
  let fixture: ComponentFixture<ConcertsPreviousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcertsPreviousComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcertsPreviousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
