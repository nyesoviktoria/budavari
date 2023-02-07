import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ICONS_ROUTE } from '../../constants/app.constants';
import { FOOTER_CONTACT_ICON_ITEMS } from '../../constants/footer-contact-icon-items-config.constants';

@Component({
  selector: 'bvkz-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly iconsRoute = ICONS_ROUTE;
  readonly contactIcons = FOOTER_CONTACT_ICON_ITEMS;

  currentYear = new Date().getFullYear();

  trackByIndex(index: number): number {
    return index;
  }
}
