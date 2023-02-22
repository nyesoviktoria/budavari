import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  IMAGES_ROUTE,
  MILLISECONDS_TO_SECONDS_COUNTER,
  NUMBER_TO_CHECK_IF_HORIZONTAL_ENOUGH,
  NUMBER_TO_CHECK_IF_LONG_ENOUGH,
  NUMBER_TO_REDUCE_LENGTH_BY_2,
} from '../../constants/app.constants';
import { SwipeWhen } from '../../enums/swipe-when.enum';
import { GalleryItem } from '../../interfaces/gallery-item.interface';
import { SelectedGalleryDialogData } from '../../interfaces/selected-gallery-dialog-data.interface';

@Component({
  selector: 'bvkz-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryDialogComponent {
  private swipeCoord: [number, number] = [0, 0];
  private swipeTime = 0;
  readonly imagesRoute = IMAGES_ROUTE;
  readonly folderId = String(this.data.imageId).slice(0, NUMBER_TO_REDUCE_LENGTH_BY_2);

  currentIndex = this.data.galleryItems.findIndex((galleryItem: GalleryItem) => galleryItem.id === this.data.imageId);

  constructor(@Inject(MAT_DIALOG_DATA) readonly data: SelectedGalleryDialogData) {}

  onNextClick(): void {
    if (this.currentIndex === this.data.galleryItems.length - 1) {
      return;
    }
    this.currentIndex++;
  }

  onPreviousClick(): void {
    if (this.currentIndex === 0) {
      return;
    }
    this.currentIndex--;
  }

  swipe(touchEvent: TouchEvent, when: string): void {
    const coord: [number, number] = [touchEvent.changedTouches[0].clientX, touchEvent.changedTouches[0].clientY];

    if (when === SwipeWhen.START) {
      this.swipeCoord = coord;
    } else if (when === SwipeWhen.END) {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const isDistanceBigEnough: boolean = Math.abs(direction[0]) > NUMBER_TO_CHECK_IF_LONG_ENOUGH;
      const isDirectionDifferenceBigEnough: boolean =
        Math.abs(direction[0]) > Math.abs(direction[1] * NUMBER_TO_CHECK_IF_HORIZONTAL_ENOUGH);

      if (isDistanceBigEnough && isDirectionDifferenceBigEnough) {
        this.currentIndex = direction[0] < 0 ? this.currentIndex + 1 : this.currentIndex - 1;
      }
    }
  }
}
