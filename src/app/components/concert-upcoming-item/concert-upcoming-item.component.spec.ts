import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertUpcomingItemComponent } from './concert-upcoming-item.component';

describe('ConcertUpcomingItemComponent', () => {
  let component: ConcertUpcomingItemComponent;
  let fixture: ComponentFixture<ConcertUpcomingItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcertUpcomingItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcertUpcomingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
