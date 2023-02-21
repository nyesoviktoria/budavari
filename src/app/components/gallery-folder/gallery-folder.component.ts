import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GALLERY_ITEMS } from '../../constants/gallery-items.constants';

@Component({
  selector: 'bvkz-gallery-folder',
  templateUrl: './gallery-folder.component.html',
  styleUrls: ['./gallery-folder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryFolderComponent {
  readonly galleryItems = GALLERY_ITEMS;

  trackByIndex(index: number): number {
    return index;
  }
}
