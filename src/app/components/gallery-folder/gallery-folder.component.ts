import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { GALLERY_ITEMS } from '../../constants/gallery-items.constants';
import { GalleryItem } from '../../interfaces/gallery-item.interface';
import { SelectedGalleryDialogData } from '../../interfaces/selected-gallery-dialog-data.interface';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'bvkz-gallery-folder',
  templateUrl: './gallery-folder.component.html',
  styleUrls: ['./gallery-folder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryFolderComponent {
  @Output() selectedImageId = new EventEmitter<SelectedGalleryDialogData>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  galleryItems = GALLERY_ITEMS;

  pageSize = 1;
  pageIndex = 0;
  length = this.galleryItems.length;

  onPageChange(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.length = event.length;
    console.log(event);
    console.log(this.length);
  }

  onImageSelect(galleryItems: readonly GalleryItem[], imageId: number): void {
    this.selectedImageId.emit({ galleryItems, imageId });
  }

  trackByIndex(index: number): number {
    return index;
  }
}
