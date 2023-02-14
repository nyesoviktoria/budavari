import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslatePipe } from '@ngx-translate/core';
import { MockPipe } from 'ng-mocks';

import { MemberDialogItem } from '../../interfaces/member-dialog.item.interface';
import { MemberDialogComponent } from './member-dialog.component';

describe('MemberDialogComponent', () => {
  let component: MemberDialogComponent;
  let fixture: ComponentFixture<MemberDialogComponent>;

  const memberDialogItemTestData: MemberDialogItem = {
    name: 'name',
    memberId: 'NYESO_VIKTORIA',
    imageSource: 'imageSource',
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MemberDialogComponent, MockPipe(TranslatePipe)],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: memberDialogItemTestData,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MemberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
