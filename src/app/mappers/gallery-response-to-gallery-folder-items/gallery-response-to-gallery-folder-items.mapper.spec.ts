import { GalleryFolderItem } from '../../interfaces/gallery-folder-item.interface';
import { GalleryResponse } from '../../interfaces/gallery-response.interface';
import { mapGalleryResponseToGalleryFolderItems } from './gallery-response-to-gallery-folder-items.mapper';

describe('GalleryResponseToGalleryFolderItems mapper', () => {
  describe('GalleryResponse to GalleryFolderItems', () => {
    const galleryResponseMock: readonly GalleryResponse[] = [
      {
        FolderId: 1,
        FolderTitle: '2022. december 17., Deák Téri Evangélikus Gimnázium',
        FolderDateCode: '20221217',
        PhotographerName: 'Stépán Virág',
        ImageId: 1,
        ImageSource: '2022.12.17.img01',
        IsVertical: false,
      },
    ];
    const expectedValue: readonly GalleryFolderItem[] = [
      {
        title: '2022. december 17., Deák Téri Evangélikus Gimnázium',
        folderId: '20221217',
        photographer: 'Stépán Virág',
        images: [
          {
            imageSource: '2022.12.17.img01',
            isVertical: false,
            id: 1,
          },
        ],
      },
    ];

    it('should map correctly', () => {
      expect(mapGalleryResponseToGalleryFolderItems(galleryResponseMock)).toEqual(expectedValue);
    });
  });
});
