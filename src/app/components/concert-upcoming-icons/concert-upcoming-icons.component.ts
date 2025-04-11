import { ChangeDetectionStrategy, Component, OnInit, input, output } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';
import { IconItemPipe } from '../../pipes/icon-item/icon-item.pipe';
import { UpcomingConcert } from '../../../../api';

@Component({
  selector: 'bvkz-concert-upcoming-icons',
  templateUrl: './concert-upcoming-icons.component.html',
  styleUrls: ['./concert-upcoming-icons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, IconItemPipe],
})
export class ConcertUpcomingIconsComponent implements OnInit {
  readonly concertActual = input.required<UpcomingConcert>();
  readonly selectedInviteSource = output<string>();

  private googleCalendarUrlStart = 'https://www.google.com/calendar/render?action=TEMPLATE';

  concertCalendarUrl = '';
  locationMapUrl = '';

  ngOnInit(): void {
    const startDate = new Date(this.concertActual().ConcertDate);
    const endDate = new Date(startDate.getTime() + this.concertActual().ConcertLengthInMinutes * 60000);

    const formatDate = (date: Date) => {
      return date
        .toISOString()
        .replace(/[-:]/g, '')
        .replace(/\.\d+Z/, 'Z');
    };

    const params = new URLSearchParams({
      text: this.concertActual().Title,
      dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
      details: this.createDescription(),
      location: this.concertActual().Location,
      remind: '1440B,120B',
      sf: 'true',
      output: 'xml',
    });

    this.concertCalendarUrl = `${this.googleCalendarUrlStart}&${params.toString()}`;

    this.generateMapsLink();
  }

  private generateMapsLink(): void {
    const encodedAddress = encodeURIComponent(this.concertActual().Location);
    this.locationMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
  }

  private createDescription(): string {
    let desc = this.concertActual().Description;

    desc = desc.replace(/\n/g, '<br>').replace(/"/g, "'").replace(/&/g, '%26');

    if (this.concertActual().FacebookEventUrl) {
      desc += `<br><br>Facebook esemény: <a href="${this.concertActual().FacebookEventUrl}">Link</a>`;
    }

    return desc;
  }

  onOpenInviteDialog(inviteSource: string): void {
    this.selectedInviteSource.emit(inviteSource);
  }
}
