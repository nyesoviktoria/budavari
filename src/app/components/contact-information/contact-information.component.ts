import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT_COMPONENT_ICON_ITEMS } from '../../constants/contact-components-icon-items.config.constants';
import { CONTACT_INFORMATION } from '../../constants/contact-information.constants';

import { TranslateModule } from '@ngx-translate/core';
import { IconItemPipe } from '../../pipes/icon-item/icon-item.pipe';

@Component({
  selector: 'bvkz-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, IconItemPipe],
})
export class ContactInformationComponent {
  readonly contactIcons = CONTACT_COMPONENT_ICON_ITEMS;
  readonly contactInformation = CONTACT_INFORMATION;
}
