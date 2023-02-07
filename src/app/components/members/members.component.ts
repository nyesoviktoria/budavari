import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICONS_ROUTE } from '../../constants/app.constants';
import { IMAGES_ROUTE } from '../../constants/app.constants';
import { MEMBERS_PARTS_ITEMS } from '../../constants/members-part-items-config.constant';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembersComponent {
  readonly iconsRoute = ICONS_ROUTE;
  readonly imagesRoute = IMAGES_ROUTE;
  readonly membersPartItems = MEMBERS_PARTS_ITEMS;

  // TODO: ide kell egy output ami kiemittalja az adott emberke ID-jat

  trackByIndex(index: number): number {
    return index;
  }
}