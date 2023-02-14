import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SOLOISTS } from '../../constants/soloists.constants';
import { EX_MEMBERS } from '../../constants/ex-members.constants';

@Component({
  selector: 'bvkz-soloists-and-ex-members',
  templateUrl: './soloists-and-ex-members.component.html',
  styleUrls: ['./soloists-and-ex-members.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoloistsAndExMembersComponent {
  readonly soloists = SOLOISTS;
  readonly exMembers = EX_MEMBERS;

  trackByIndex(index: number): number {
    return index;
  }
}
