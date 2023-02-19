import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertsUpcomingComponent } from './concerts-upcoming.component';

describe('ConcertsUpcomingComponent', () => {
  let component: ConcertsUpcomingComponent;
  let fixture: ComponentFixture<ConcertsUpcomingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcertsUpcomingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcertsUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
