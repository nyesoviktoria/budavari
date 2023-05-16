import { GalleryItem } from './gallery-item.interface';

export interface GalleryFolderItem {
  readonly title: string;
  readonly folderId: string;
  readonly photographer: string;
  readonly images: GalleryItem[];
}
