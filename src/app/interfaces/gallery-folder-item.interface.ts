import { GalleryItem } from './gallery-item.interface';

export interface GalleryFolderItem {
  readonly title: string;
  readonly galleryFolder: string;
  readonly photographer: string;
  readonly images: readonly GalleryItem[];
}
