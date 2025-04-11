import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { ConcertUpcomingItemComponent } from '../concert-upcoming-item/concert-upcoming-item.component';
import { UpcomingConcert } from '../../../../api';

@Component({
  selector: 'bvkz-concerts-upcoming',
  templateUrl: './concerts-upcoming.component.html',
  styleUrls: ['./concerts-upcoming.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ConcertUpcomingItemComponent],
})
export class ConcertsUpcomingComponent {
  readonly concertsUpcomingItems = input<readonly UpcomingConcert[]>([]);

  readonly selectedInviteSource = output<string>();

  expiredConcertIndex = true;

  onOpenInviteDialog(inviteSource: string): void {
    this.selectedInviteSource.emit(inviteSource);
  }
}
