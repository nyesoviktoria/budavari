import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMAGES_ROUTE } from '../../constants/app.constants';

@Component({
  selector: 'bvkz-concert-invite-dialog',
  templateUrl: './concert-invite-dialog.component.html',
  styleUrls: ['./concert-invite-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConcertInviteDialogComponent {
  readonly imagesRoute = IMAGES_ROUTE;

  constructor(@Inject(MAT_DIALOG_DATA) readonly data: string) {}
}
