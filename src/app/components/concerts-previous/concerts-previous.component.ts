import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { ConcertPreviousItem } from '../../interfaces/concerts-previous-item.interface';

import { TranslateModule } from '@ngx-translate/core';
import { VideosSourcePipe } from '../../pipes/videos-source/videos-source.pipe';

@Component({
  selector: 'bvkz-concerts-previous',
  templateUrl: './concerts-previous.component.html',
  styleUrls: ['./concerts-previous.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, VideosSourcePipe],
})
export class ConcertsPreviousComponent {
  readonly concertsPreviousItems = input<readonly ConcertPreviousItem[]>([]);

  readonly video = output<HTMLVideoElement>();

  onPlay(audio: HTMLVideoElement): void {
    this.video.emit(audio);
  }
}
