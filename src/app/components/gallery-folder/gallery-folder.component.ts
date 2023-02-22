import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { GALLERY_ITEMS } from '../../constants/gallery-items.constants';
import { GalleryItem } from '../../interfaces/gallery-item.interface';
import { SelectedGalleryDialogData } from '../../interfaces/selected-gallery-dialog-data.interface';

@Component({
  selector: 'bvkz-gallery-folder',
  templateUrl: './gallery-folder.component.html',
  styleUrls: ['./gallery-folder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryFolderComponent {
  @Output() selectedImageId = new EventEmitter<SelectedGalleryDialogData>();

  readonly galleryItems = GALLERY_ITEMS;

  onImageSelect(galleryItems: readonly GalleryItem[], imageId: number): void {
    this.selectedImageId.emit({ galleryItems, imageId });
  }

  trackByIndex(index: number): number {
    return index;
  }
}
