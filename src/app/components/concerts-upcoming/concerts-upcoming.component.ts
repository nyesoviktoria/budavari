import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ConcertUpcomingItem } from '../../interfaces/concert-upcoming-item.interface';
import { NgFor } from '@angular/common';
import { ConcertUpcomingItemComponent } from '../concert-upcoming-item/concert-upcoming-item.component';

@Component({
    selector: 'bvkz-concerts-upcoming',
    templateUrl: './concerts-upcoming.component.html',
    styleUrls: ['./concerts-upcoming.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgFor, ConcertUpcomingItemComponent],
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
