import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertInviteDialogComponent } from './concert-invite-dialog.component';

describe('ConcertInviteDialogComponent', () => {
  let component: ConcertInviteDialogComponent;
  let fixture: ComponentFixture<ConcertInviteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcertInviteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcertInviteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
