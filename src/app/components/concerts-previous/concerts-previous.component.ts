import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ConcertPreviousItem } from '../../interfaces/concerts-previous-item.interface';

@Component({
  selector: 'bvkz-concerts-previous',
  templateUrl: './concerts-previous.component.html',
  styleUrls: ['./concerts-previous.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
