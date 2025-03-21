import { ChangeDetectionStrategy, Component, OnInit, input, output } from '@angular/core';
import { ConcertUpcomingItem } from '../../interfaces/concert-upcoming-item.interface';
import { secondsUntilConcert } from '../../utils/seconds-until-concert/seconds-until-concert.util';
import { NgClass } from '@angular/common';
import { CountdownComponent } from '../countdown/countdown.component';
import { ConcertUpcomingIconsComponent } from '../concert-upcoming-icons/concert-upcoming-icons.component';
import { TranslateModule } from '@ngx-translate/core';
import { ImageItemPipe } from '../../pipes/image-item/image-item.pipe';

@Component({
  selector: 'bvkz-concert-upcoming-item',
  templateUrl: './concert-upcoming-item.component.html',
  styleUrls: ['./concert-upcoming-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass, CountdownComponent, ConcertUpcomingIconsComponent, TranslateModule, ImageItemPipe],
})
export class ConcertUpcomingItemComponent implements OnInit {
  readonly concert = input.required<ConcertUpcomingItem>();
  readonly concertIndex = input(0);

  readonly selectedInviteSource = output<string>();

  isConcertExpired = false;

  ngOnInit(): void {
    this.isConcertExpired = secondsUntilConcert(this.concert().dateCode) < 0;
  }

  onOpenInviteDialog(inviteSource: string): void {
    this.selectedInviteSource.emit(inviteSource);
  }
}
