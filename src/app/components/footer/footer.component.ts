import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FOOTER_CONTACT_ICON_ITEMS } from '../../constants/footer-contact-icon-items-config.constants';

import { TranslateModule } from '@ngx-translate/core';
import { IconItemPipe } from '../../pipes/icon-item/icon-item.pipe';

@Component({
  selector: 'bvkz-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslateModule, IconItemPipe],
})
export class FooterComponent {
  readonly contactIcons = FOOTER_CONTACT_ICON_ITEMS;

  readonly currentYear = new Date().getFullYear();
}
