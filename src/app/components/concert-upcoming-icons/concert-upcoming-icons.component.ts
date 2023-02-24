import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ConcertUpcomingItem } from '../../interfaces/concerts-upcoming-item.interface';

@Component({
  selector: 'bvkz-concert-upcoming-icons',
  templateUrl: './concert-upcoming-icons.component.html',
  styleUrls: ['./concert-upcoming-icons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConcertUpcomingIconsComponent {
  @Input() concertActual!: ConcertUpcomingItem;
}
