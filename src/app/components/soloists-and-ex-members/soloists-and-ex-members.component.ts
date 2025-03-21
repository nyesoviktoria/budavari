import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SOLOISTS } from '../../constants/soloists.constants';
import { EX_MEMBERS } from '../../constants/ex-members.constants';
import { AccordionComponent } from '../accordion/accordion.component';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'bvkz-soloists-and-ex-members',
  templateUrl: './soloists-and-ex-members.component.html',
  styleUrls: ['./soloists-and-ex-members.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AccordionComponent, TranslateModule],
})
export class SoloistsAndExMembersComponent {
  readonly soloists = SOLOISTS;
  readonly exMembers = EX_MEMBERS;
}
