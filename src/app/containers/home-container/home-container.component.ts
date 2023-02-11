import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SOLOISTS } from '../../constants/soloists.constants';
import { EX_MEMBERS } from '../../constants/ex-members.constants';

@Component({
  selector: 'bvkz-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeContainerComponent {
  readonly soloists = SOLOISTS;
  readonly exMembers = EX_MEMBERS;

  onMemberSelected(member: string): void {
    console.log('member: ', member);
  }
}
