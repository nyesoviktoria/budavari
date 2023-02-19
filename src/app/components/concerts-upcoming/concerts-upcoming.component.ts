import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICONS_ROUTE, IMAGES_ROUTE } from '../../constants/app.constants';
import { CONCERTS_UPCOMING_ICONS } from '../../constants/concerts-upcoming-icons.constants';
import { CONCERTS_UPCOMING_ITEMS } from '../../constants/concerts-upcoming-items.constants';

@Component({
  selector: 'bvkz-concerts-upcoming',
  templateUrl: './concerts-upcoming.component.html',
  styleUrls: ['./concerts-upcoming.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConcertsUpcomingComponent {
  readonly iconsRoute = ICONS_ROUTE;
  readonly imagesRoute = IMAGES_ROUTE;
  readonly concertsUpcomingItems = CONCERTS_UPCOMING_ITEMS;
  readonly concertUpcomingIcons = CONCERTS_UPCOMING_ICONS;

  trackByIndex(index: number): number {
    return index;
  }
}
