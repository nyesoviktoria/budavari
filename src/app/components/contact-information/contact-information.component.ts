import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT_COMPONENT_ICON_ITEMS } from '../../constants/contact-components-icon-items.config.constants';
import { CONTACT_INFORMATION } from '../../constants/contact-information.constants';

@Component({
  selector: 'bvkz-contact-information',
  templateUrl: './contact-information.component.html',
  styleUrls: ['./contact-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactInformationComponent {
  readonly contactIcons = CONTACT_COMPONENT_ICON_ITEMS;
  readonly contactInformation = CONTACT_INFORMATION;

  trackByIndex(index: number): number {
    return index;
  }
}
