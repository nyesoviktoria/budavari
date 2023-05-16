import { GalleryFolderItem } from '../../interfaces/gallery-folder-item.interface';
import { GalleryResponse } from '../../interfaces/gallery-response.interface';

export const mapGalleryResponseToGalleryFolderItems = (galleryResponse: readonly GalleryResponse[]): readonly GalleryFolderItem[] => {
  return galleryResponse
    .map((galleryTo: GalleryResponse) => {
      const images = [{ imageSource: galleryTo.ImageSource, isVertical: galleryTo.IsVertical, id: galleryTo.ImageId }];

      return {
        title: galleryTo.FolderTitle,
        folderId: galleryTo.FolderDateCode,
        photographer: galleryTo.PhotographerName,
        images: images,
      };
    })
    .reduce((galleryFolderItems: GalleryFolderItem[], item) => {
      const galleryFolders: string[] = [];

      galleryFolderItems.forEach((image: GalleryFolderItem) => {
        if (galleryFolders.includes(image.folderId)) {
          return;
        }
        galleryFolders.push(image.folderId);
      });

      if (galleryFolders.includes(item.folderId)) {
        const correctFolderIndex = galleryFolderItems.findIndex((folder: GalleryFolderItem) => folder.folderId === item.folderId);
        galleryFolderItems[correctFolderIndex].images.push(...item.images);
      } else {
        galleryFolderItems.push(item);
      }

      return galleryFolderItems;
    }, []);
};
