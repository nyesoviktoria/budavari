import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MINUTES_IN_AN_HOUR, NUMBER_TO_FIX_CONCERT_TIME } from '../../constants/app.constants';
import { ConcertUpcomingItem } from '../../interfaces/concert-upcoming-item.interface';

@Component({
  selector: 'bvkz-concert-upcoming-icons',
  templateUrl: './concert-upcoming-icons.component.html',
  styleUrls: ['./concert-upcoming-icons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConcertUpcomingIconsComponent implements OnInit {
  @Input() concertActual!: ConcertUpcomingItem;
  @Output() selectedInviteSource = new EventEmitter<string>();

  private googleCalendarUrlStart = 'https://www.google.com/calendar/render?action=TEMPLATE';

  concertCalendarUrl = '';

  ngOnInit(): void {
    this.concertCalendarUrl = `${this.googleCalendarUrlStart}&text=${this.concertActual.title}&dates=${this.createCorrectDateForm(
      this.concertActual.dateCode,
      this.concertActual.concertLengthInMinutes
    )}&details=${this.concertActual.description}&location=${this.concertActual.place}&sf=true&output=xml`;
  }

  createCorrectDateForm(dateCode: string, length: number): string {
    const concertLengthHours = length / MINUTES_IN_AN_HOUR; //2
    const concertLengthMinutes = length % MINUTES_IN_AN_HOUR; //0
    const dateToCalculateArray = dateCode.replaceAll('-', '').replaceAll(':', '').split('T'); //[20230318, 1930]

    const concertDate = dateToCalculateArray[0]; //20230318
    const concertStart = Number(dateToCalculateArray[1]) - NUMBER_TO_FIX_CONCERT_TIME; //1830
    const concertEnd = concertStart + concertLengthHours * NUMBER_TO_FIX_CONCERT_TIME + concertLengthMinutes;

    return dateCode.includes('T') ? `${concertDate}T${concertStart}00Z/${concertDate}T${concertEnd}00Z` : `${concertDate}/${concertDate}`;
  }

  onOpenInviteDialog(inviteSource: string): void {
    this.selectedInviteSource.emit(inviteSource);
  }
}
