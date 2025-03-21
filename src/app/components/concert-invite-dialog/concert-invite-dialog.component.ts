import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { ImageItemPipe } from '../../pipes/image-item/image-item.pipe';

@Component({
  selector: 'bvkz-concert-invite-dialog',
  templateUrl: './concert-invite-dialog.component.html',
  styleUrls: ['./concert-invite-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, ImageItemPipe],
})
export class ConcertInviteDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) readonly data: string) {}
}
