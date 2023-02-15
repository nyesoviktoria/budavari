import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SOLOISTS } from '../../constants/soloists.constants';
import { EX_MEMBERS } from '../../constants/ex-members.constants';
import { MatDialog } from '@angular/material/dialog';
import { MemberDialogComponent } from '../../components/member-dialog/member-dialog.component';

import { MemberDialogItem } from '../../interfaces/member-dialog.item.interface';
import { MEMBER_DIALOG_DATA } from '../../constants/member-dialog-data-config.constants';

@Component({
  selector: 'bvkz-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainerComponent {
  readonly soloists = SOLOISTS;
  readonly exMembers = EX_MEMBERS;

  constructor(public dialog: MatDialog) {

  }

  onMemberSelected(memberId: string): void {
    const selectedMember = MEMBER_DIALOG_DATA.find((memberDialogItem: MemberDialogItem) => memberDialogItem.memberId === memberId);

    if (!selectedMember) {
      return;
    }

    this.dialog.open(MemberDialogComponent, {
      data: selectedMember,
    });
  }
}
