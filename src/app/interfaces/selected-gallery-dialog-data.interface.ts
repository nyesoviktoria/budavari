import { GalleryItem } from './gallery-item.interface';

export interface SelectedGalleryDialogData {
  readonly galleryItems: readonly GalleryItem[];
  readonly folderId: string;
  readonly imageId: number;
}
