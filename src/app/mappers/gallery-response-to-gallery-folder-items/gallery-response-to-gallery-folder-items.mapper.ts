import { GalleryFolderItem } from '../../interfaces/gallery-folder-item.interface';
import { GalleryResponse } from '../../interfaces/gallery-response.interface';


export const mapGalleryResponseToGalleryFolderItems = (galleryResponse: readonly GalleryResponse[]) => {
  return galleryResponse.map((galleryTo: GalleryResponse))
}
//   (galleryResponse: readonly galleryResponse[]): readonly GalleryFolderItem[] => {
//   return galleryResponse
//     .map((recordsAudioTo: RecordsAudioResponse) => {
//       const tracks = [
//         { trackSource: recordsAudioTo.TrackSource, audioTitle: recordsAudioTo.RecordTitle, soloistName: recordsAudioTo.SoloistName },
//       ];

//       return {
//         recordTitle: recordsAudioTo.AlbumTitle,
//         coverImageSource: recordsAudioTo.CoverImageSource,
//         coverImageAltText: recordsAudioTo.CoverImageAltText,
//         description: recordsAudioTo.Description,
//         albumId: mapRecordId(recordsAudioTo.AlbumName),
//         tracks: tracks,
//       };
//     })
//     .reduce((recordsFolderItems: RecordsFolderItem[], item) => {
//       const folders: string[] = [];

//       recordsFolderItems.forEach((record: RecordsFolderItem) => {
//         if (folders.includes(record.albumId)) {
//           return;
//         }
//         folders.push(record.albumId);
//       });

//       if (folders.includes(item.albumId)) {
//         const correctFolderIndex = recordsFolderItems.findIndex((folder: RecordsFolderItem) => folder.albumId === item.albumId);
//         recordsFolderItems[correctFolderIndex].tracks.push(...item.tracks);
//       } else {
//         recordsFolderItems.push(item);
//       }

//       return recordsFolderItems;
//     }, []);
// };
