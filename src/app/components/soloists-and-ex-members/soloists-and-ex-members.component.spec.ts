import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TranslatePipe } from '@ngx-translate/core';
import { MockComponent, MockPipe } from 'ng-mocks';
import { AccordionComponent } from '../accordion/accordion.component';

import { SoloistsAndExMembersComponent } from './soloists-and-ex-members.component';

describe('SoloistsAndExMembersComponent', () => {
  let component: SoloistsAndExMembersComponent;
  let fixture: ComponentFixture<SoloistsAndExMembersComponent>;

  beforeEach(waitForAsync (() => {
     TestBed.configureTestingModule({
      declarations: [SoloistsAndExMembersComponent, MockComponent(AccordionComponent), MockPipe(TranslatePipe)],
    }).compileComponents();

    fixture = TestBed.createComponent(SoloistsAndExMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
