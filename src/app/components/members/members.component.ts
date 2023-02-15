import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ICONS_ROUTE, IMAGES_ROUTE } from '../../constants/app.constants';
import { MEMBERS_PARTS_ITEMS } from '../../constants/members-part-items-config.constant';

@Component({
  selector: 'bvkz-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembersComponent {
  @Output() memberId = new EventEmitter<string>();

  readonly iconsRoute = ICONS_ROUTE;
  readonly imagesRoute = IMAGES_ROUTE;
  readonly membersPartItems = MEMBERS_PARTS_ITEMS;

  onMemberSelected(member: string): void {
    this.memberId.emit(member);
  }

  trackByIndex(index: number): number {
    return index;
  }
}
