import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICONS_ROUTE, IMAGES_ROUTE } from '../../constants/app.constants';
import { HEADER_NAVIGATION_ITEMS } from '../../constants/header-navigation-items-config.constants';
import { HeaderNavigationItem } from '../../interfaces/header-navigation-item.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { IconItemPipe } from '../../pipes/icon-item/icon-item.pipe';

@Component({
  selector: 'bvkz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, TranslateModule, IconItemPipe],
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
}
