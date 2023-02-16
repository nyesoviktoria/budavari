import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IMAGES_ROUTE } from '../../constants/app.constants';
import { RECORD_ITEMS } from '../../constants/record-items.constants';

@Component({
  selector: 'bvkz-records-container',
  templateUrl: './records-container.component.html',
  styleUrls: ['./records-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordsContainerComponent {
  readonly recordItems = RECORD_ITEMS;
  readonly imagesRoute = IMAGES_ROUTE;

  private currentPlayedElement?: HTMLAudioElement;

  onPlay(element: HTMLAudioElement): void {
    if (this.currentPlayedElement && this.currentPlayedElement !== element) {
      this.currentPlayedElement.pause();
    }

    this.currentPlayedElement = element;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
