import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent } from '@angular/material/dialog';
import { MemberDialogItem } from '../../interfaces/member-dialog.item.interface';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { TranslateModule } from '@ngx-translate/core';
import { MembersDialogImageSourcePipe } from '../../pipes/members-dialog-image-source/members-dialog-image-source.pipe';

@Component({
    selector: 'bvkz-member-dialog',
    templateUrl: './member-dialog.component.html',
    styleUrls: ['./member-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        CdkScrollable,
        MatDialogContent,
        TranslateModule,
        MembersDialogImageSourcePipe,
    ],
})
export class MemberDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) readonly data: MemberDialogItem) {}
}
