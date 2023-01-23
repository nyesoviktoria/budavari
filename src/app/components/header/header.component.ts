import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ICONS_ROUTE, IMAGES_ROUTE } from '../../constants/app.constants';
import { HEADER_NAVIGATION_ITEMS } from '../../constants/header-navigation-items-config.constants';
import { HeaderNavigationItem } from '../../interfaces/header-navigation-item.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  readonly imagesRoute = IMAGES_ROUTE;
  readonly iconsRoute = ICONS_ROUTE;
  readonly navigationItems: readonly HeaderNavigationItem[] =
    HEADER_NAVIGATION_ITEMS;
  readonly isMobileViewOn: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onNavigateToPage() {
    return;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
