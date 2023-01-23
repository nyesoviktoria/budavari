import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ICONS_ROUTE } from '../../constants/app.constants';
import { FOOTER_CONTACT_ICON_ITEMS } from '../../constants/footer-contact-icon-items-config.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  iconsRoute = ICONS_ROUTE;
  contactIcons = FOOTER_CONTACT_ICON_ITEMS;

  currentYear = new Date().getFullYear();

  trackByIndex(index: number): number {
    return index;
  }
}
