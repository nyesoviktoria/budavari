import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { GALLERY_ITEMS } from '../../constants/gallery-items.constants';

@Component({
  selector: 'bvkz-gallery-folder',
  templateUrl: './gallery-folder.component.html',
  styleUrls: ['./gallery-folder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryFolderComponent {
  @Output() selectedImageId = new EventEmitter<number>();

  readonly galleryItems = GALLERY_ITEMS;

  onImageSelect(id: number): void {
    this.selectedImageId.emit(id);
  }

  trackByIndex(index: number): number {
    return index;
  }
}
