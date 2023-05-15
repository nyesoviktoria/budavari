import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ConcertUpcomingItem } from '../../interfaces/concert-upcoming-item.interface';

@Component({
  selector: 'bvkz-concerts-upcoming',
  templateUrl: './concerts-upcoming.component.html',
  styleUrls: ['./concerts-upcoming.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConcertsUpcomingComponent {
  @Input() concertsUpcomingItems: readonly ConcertUpcomingItem[] = [];

  @Output() selectedInviteSource = new EventEmitter<string>();

  expiredConcertIndex = true;

  onOpenInviteDialog(inviteSource: string): void {
    this.selectedInviteSource.emit(inviteSource);
  }

  trackByIndex(index: number): number {
    return index;
  }
}
