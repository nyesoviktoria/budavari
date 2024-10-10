import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ICONS_ROUTE, IMAGES_ROUTE } from '../../constants/app.constants';
import { MEMBERS_PARTS_ITEMS } from '../../constants/members-part-items-config.constants';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IconItemPipe } from '../../pipes/icon-item/icon-item.pipe';

@Component({
    selector: 'bvkz-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
    NgClass,
    TranslateModule,
    IconItemPipe
],
})
export class MembersComponent {
  @Output() memberId = new EventEmitter<string>();

  readonly iconsRoute = ICONS_ROUTE;
  readonly imagesRoute = IMAGES_ROUTE;
  readonly membersPartItems = MEMBERS_PARTS_ITEMS;

  onMemberSelected(member: string): void {
    this.memberId.emit(member);
  }
}
