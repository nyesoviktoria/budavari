import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContactInformationComponent } from '../../components/contact-information/contact-information.component';
import { JoinUsComponent } from '../../components/join-us/join-us.component';

@Component({
  selector: 'bvkz-contact-container',
  templateUrl: './contact-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ContactInformationComponent, JoinUsComponent],
})
export class ContactContainerComponent {}
