import { ChangeDetectionStrategy, Component, HostListener, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GalleryItem } from '../../interfaces/gallery-item.interface';
import { SelectedGalleryDialogData } from '../../interfaces/selected-gallery-dialog-data.interface';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { GalleryItemSourcePipe } from '../../pipes/gallery-item-source/gallery-item-source.pipe';
import { IconItemPipe } from '../../pipes/icon-item/icon-item.pipe';

@Component({
  selector: 'bvkz-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgClass, TranslateModule, GalleryItemSourcePipe, IconItemPipe],
})
export class GalleryDialogComponent {
  @HostListener('document:keydown.arrowleft')
  onArrowLeft(): void {
    this.onPreviousClick();
  }

  @HostListener('document:keydown.arrowright')
  onArrowRight(): void {
    this.onNextClick();
  }

  readonly folderId = String(this.data.folderId);

  private touchStart = 0;
  private touchEnd = 0;

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

  swipeStart(event: TouchEvent): void {
    this.touchStart = event.changedTouches[0].screenX;
  }

  swipeEnd(event: TouchEvent): void {
    this.touchEnd = event.changedTouches[0].screenX;
    if (this.touchEnd < this.touchStart) {
      this.onNextClick();
    }

    if (this.touchEnd > this.touchStart) {
      this.onPreviousClick();
    }
  }
}
