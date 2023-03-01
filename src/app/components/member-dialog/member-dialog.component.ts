import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MemberDialogItem } from '../../interfaces/member-dialog.item.interface';

@Component({
  selector: 'bvkz-member-dialog',
  templateUrl: './member-dialog.component.html',
  styleUrls: ['./member-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) readonly data: MemberDialogItem) {}
}
