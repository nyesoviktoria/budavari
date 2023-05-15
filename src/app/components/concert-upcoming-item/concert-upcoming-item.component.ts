import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConcertUpcomingItem } from '../../interfaces/concert-upcoming-item.interface';
import { secondsUntilConcert } from '../../utils/seconds-until-concert/seconds-until-concert.util';

@Component({
  selector: 'bvkz-concert-upcoming-item',
  templateUrl: './concert-upcoming-item.component.html',
  styleUrls: ['./concert-upcoming-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConcertUpcomingItemComponent implements OnInit {
  @Input() concert!: ConcertUpcomingItem;
  @Input() concertIndex = 0;

  @Output() selectedInviteSource = new EventEmitter<string>();

  isConcertExpired = false;

  ngOnInit(): void {
    this.isConcertExpired = secondsUntilConcert(this.concert.dateCode) < 0;
  }

  onOpenInviteDialog(inviteSource: string): void {
    this.selectedInviteSource.emit(inviteSource);
  }
}
