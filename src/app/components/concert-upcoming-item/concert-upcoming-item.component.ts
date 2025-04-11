import { ChangeDetectionStrategy, Component, OnInit, input, output } from '@angular/core';

import { secondsUntilConcert } from '../../utils/seconds-until-concert/seconds-until-concert.util';
import { DatePipe, NgClass } from '@angular/common';
import { CountdownComponent } from '../countdown/countdown.component';
import { ConcertUpcomingIconsComponent } from '../concert-upcoming-icons/concert-upcoming-icons.component';
import { TranslateModule } from '@ngx-translate/core';
import { ImageItemPipe } from '../../pipes/image-item/image-item.pipe';
import { UpcomingConcert } from '../../../../api';
import { IMAGES_UPLOADS_ROUTE } from '../../constants/app.constants';

@Component({
  selector: 'bvkz-concert-upcoming-item',
  templateUrl: './concert-upcoming-item.component.html',
  styleUrls: ['./concert-upcoming-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, DatePipe, CountdownComponent, ConcertUpcomingIconsComponent, TranslateModule, ImageItemPipe],
})
export class ConcertUpcomingItemComponent implements OnInit {
  readonly concert = input.required<UpcomingConcert>();
  readonly concertIndex = input(0);

  readonly IMAGES_UPLOADS_ROUTE = IMAGES_UPLOADS_ROUTE;
  readonly selectedInviteSource = output<string>();

  isConcertExpired = false;

  ngOnInit(): void {
    this.isConcertExpired = secondsUntilConcert(this.concert().ConcertDate) < 0;
  }

  onOpenInviteDialog(inviteSource: string): void {
    this.selectedInviteSource.emit(inviteSource);
  }
}
