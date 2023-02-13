import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MemberDialogItem } from '../../interfaces/member-dialog.item.interface';
import { ICONS_ROUTE, MEMBER_IMAGES_ROUTE } from '../../constants/app.constants';

@Component({
  selector: 'bvkz-member-dialog',
  templateUrl: './member-dialog.component.html',
  styleUrls: ['./member-dialog.component.scss'],
})
export class MemberDialogComponent {
  readonly iconsRoute = ICONS_ROUTE;
  readonly membersImagesRoute = MEMBER_IMAGES_ROUTE;

  constructor(@Inject(MAT_DIALOG_DATA) readonly data: MemberDialogItem) {}
}
