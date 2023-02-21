import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FOOTER_CONTACT_ICON_ITEMS } from '../../constants/footer-contact-icon-items-config.constants';

@Component({
  selector: 'bvkz-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  readonly contactIcons = FOOTER_CONTACT_ICON_ITEMS;

  readonly currentYear = new Date().getFullYear();

  trackByIndex(index: number): number {
    return index;
  }
}
