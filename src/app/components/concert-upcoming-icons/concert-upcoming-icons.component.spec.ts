import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertUpcomingIconsComponent } from './concert-upcoming-icons.component';

describe('ConcertUpcomingIconsComponent', () => {
  let component: ConcertUpcomingIconsComponent;
  let fixture: ComponentFixture<ConcertUpcomingIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcertUpcomingIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcertUpcomingIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
