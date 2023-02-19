import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { CONCERTS_PREVIOUS_ITEMS } from '../../constants/concerts-previous-items.contsants';

@Component({
  selector: 'bvkz-concerts-previous',
  templateUrl: './concerts-previous.component.html',
  styleUrls: ['./concerts-previous.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConcertsPreviousComponent {
  @Output() video = new EventEmitter<HTMLVideoElement>();

  readonly concertsPreviousItems = CONCERTS_PREVIOUS_ITEMS;

  onPlay(audio: HTMLVideoElement): void {
    this.video.emit(audio);
  }

  trackByIndex(index: number): number {
    return index;
  }
}
