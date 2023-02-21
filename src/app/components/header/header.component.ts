import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICONS_ROUTE, IMAGES_ROUTE } from '../../constants/app.constants';
import { HEADER_NAVIGATION_ITEMS } from '../../constants/header-navigation-items-config.constants';
import { HeaderNavigationItem } from '../../interfaces/header-navigation-item.interface';

@Component({
  selector: 'bvkz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly imagesRoute = IMAGES_ROUTE;
  readonly iconsRoute = ICONS_ROUTE;
  readonly navigationItems: readonly HeaderNavigationItem[] = HEADER_NAVIGATION_ITEMS;
  readonly isMobileViewOn: boolean = false;

  isMobileNavigationOn = false;

  onOpenMobileNavigation(): void {
    this.isMobileNavigationOn = !this.isMobileNavigationOn;
  }

  onCloseMobileNavigation(): void {
    this.isMobileNavigationOn = false;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
