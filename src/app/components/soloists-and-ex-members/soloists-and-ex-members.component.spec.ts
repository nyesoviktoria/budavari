import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloistsAndExMembersComponent } from './soloists-and-ex-members.component';

describe('SoloistsAndExMembersComponent', () => {
  let component: SoloistsAndExMembersComponent;
  let fixture: ComponentFixture<SoloistsAndExMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoloistsAndExMembersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoloistsAndExMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
