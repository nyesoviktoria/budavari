import { GalleryItem } from './gallery-item.interface';

export interface GalleryFolderItem {
  title: string;
  galleryFolder: string;
  photographer: string;
  images: GalleryItem[];
}
