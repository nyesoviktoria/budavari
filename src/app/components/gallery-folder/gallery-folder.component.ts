import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

import { GalleryItem } from '../../interfaces/gallery-item.interface';
import { SelectedGalleryDialogData } from '../../interfaces/selected-gallery-dialog-data.interface';
import { GalleryFolderItem } from '../../interfaces/gallery-folder-item.interface';

@Component({
  selector: 'bvkz-gallery-folder',
  templateUrl: './gallery-folder.component.html',
  styleUrls: ['./gallery-folder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryFolderComponent {
  @Output() selectedImageId = new EventEmitter<SelectedGalleryDialogData>();

  @Input() galleryItems: readonly GalleryFolderItem[] = [];

  readonly itemsPerPage = 1;
  currentPage = 1;

  onImageSelect(galleryItems: readonly GalleryItem[], folderId: string, imageId: number): void {
    this.selectedImageId.emit({ galleryItems, folderId, imageId });
  }

  onPageChange(page: number): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.currentPage = page;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
