import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ConcertPreviousItem } from '../../interfaces/concerts-previous-item.interface';
import { NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { VideosSourcePipe } from '../../pipes/videos-source/videos-source.pipe';

@Component({
    selector: 'bvkz-concerts-previous',
    templateUrl: './concerts-previous.component.html',
    styleUrls: ['./concerts-previous.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgFor,
        TranslateModule,
        VideosSourcePipe,
    ],
})
export class ConcertsPreviousComponent {
  @Input() concertsPreviousItems: readonly ConcertPreviousItem[] = [];

  @Output() video = new EventEmitter<HTMLVideoElement>();

  onPlay(audio: HTMLVideoElement): void {
    this.video.emit(audio);
  }

  trackByIndex(index: number): number {
    return index;
  }
}
