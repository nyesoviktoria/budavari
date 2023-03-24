import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { getTime } from 'date-fns';
import { MILLISECONDS_TO_SECONDS_COUNTER } from '../../constants/app.constants';
import { ConcertUpcomingItem } from '../../interfaces/concerts-upcoming-item.interface';

@Component({
  selector: 'bvkz-concert-upcoming-item',
  templateUrl: './concert-upcoming-item.component.html',
  styleUrls: ['./concert-upcoming-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConcertUpcomingItemComponent implements OnInit {
  @Input() concert!: ConcertUpcomingItem;

  @Output() selectedInviteSource = new EventEmitter<string>();

  isConcertExpired = false;

  ngOnInit(): void {
    this.isConcertExpired =
      getTime(new Date(this.concert.dateCode)) / MILLISECONDS_TO_SECONDS_COUNTER -
        Math.floor(Date.now() / MILLISECONDS_TO_SECONDS_COUNTER) <
      0;
  }

  onOpenInviteDialog(inviteSource: string): void {
    this.selectedInviteSource.emit(inviteSource);
  }
}
