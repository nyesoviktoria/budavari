import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { IMAGES_ROUTE } from '../../constants/app.constants';
import { CONCERTS_UPCOMING_ITEMS } from '../../constants/concerts-upcoming-items.constants';

@Component({
  selector: 'bvkz-concerts-upcoming',
  templateUrl: './concerts-upcoming.component.html',
  styleUrls: ['./concerts-upcoming.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConcertsUpcomingComponent {
  @Output() selectedInviteSource = new EventEmitter<string>();

  readonly imagesRoute = IMAGES_ROUTE;

  readonly concertsUpcomingItems = CONCERTS_UPCOMING_ITEMS;

  nonvisibleConcertIndex?: number;

  isConcertVisible(index: number): void {
    this.nonvisibleConcertIndex = index;
  }

  onOpenInviteDialog(inviteSource: string): void {
    this.selectedInviteSource.emit(inviteSource);
  }

  trackByIndex(index: number): number {
    return index;
  }
}
