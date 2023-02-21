import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMAGES_ROUTE } from '../../constants/app.constants';
import { GalleryItem } from '../../interfaces/gallery-item.interface';
import { SelectedGalleryDialogData } from '../../interfaces/selected-gallery-dialog-data.interface';

@Component({
  selector: 'bvkz-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryDialogComponent {
  readonly imagesRoute = IMAGES_ROUTE;
  constructor(@Inject(MAT_DIALOG_DATA) readonly data: SelectedGalleryDialogData) {
    // console.log('mit kap meg: ', this.data);
  }
  readonly folderId = String(this.data.imageId).slice(0, -2);
  currentIndex = this.data.galleryItems.findIndex((galleryItem: GalleryItem) => galleryItem.id === this.data.imageId);

  onNextClick(): void {
    this.currentIndex++;
  }

  onPreviousClick(): void {
    this.currentIndex--;
  }
}
