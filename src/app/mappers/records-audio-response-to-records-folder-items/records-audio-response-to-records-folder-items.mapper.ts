import { RecordsFolderItem } from '../../interfaces/record-item.interface';
import { RecordsAudioResponse } from '../../interfaces/records-audio-response.interface';
import { RecordId } from '../../types/record-id.type';

const mapRecordId = (albumName: string): RecordId => {
  if (albumName === 'FIFTH_JUBILEUM') {
    return 'FIFTH_JUBILEUM';
  } else {
    return 'TENTH_JUBILEUM';
  }
};

export const mapRecordsAudioResponseToRecordsFolderItems = (
  recordsAudioResponse: readonly RecordsAudioResponse[]
): readonly RecordsFolderItem[] => {
  return recordsAudioResponse
    .map((recordsAudioTo: RecordsAudioResponse) => {
      const tracks = [
        { trackSource: recordsAudioTo.TrackSource, audioTitle: recordsAudioTo.RecordTitle, soloistName: recordsAudioTo.SoloistName },
      ];

      return {
        recordTitle: recordsAudioTo.AlbumTitle,
        coverImageSource: recordsAudioTo.CoverImageSource,
        coverImageAltText: recordsAudioTo.CoverImageAltText,
        description: recordsAudioTo.Description,
        albumId: mapRecordId(recordsAudioTo.AlbumName),
        tracks: tracks,
      };
    })
    .reduce((recordsFolderItems: RecordsFolderItem[], item) => {
      const folders: string[] = [];

      recordsFolderItems.forEach((record: RecordsFolderItem) => {
        if (folders.includes(record.albumId)) {
          return;
        }
        folders.push(record.albumId);
      });

      if (folders.includes(item.albumId)) {
        const correctFolderIndex = recordsFolderItems.findIndex((folder: RecordsFolderItem) => folder.albumId === item.albumId);
        recordsFolderItems[correctFolderIndex].tracks.push(...item.tracks);
      } else {
        recordsFolderItems.push(item);
      }

      return recordsFolderItems;
    }, []);
};
