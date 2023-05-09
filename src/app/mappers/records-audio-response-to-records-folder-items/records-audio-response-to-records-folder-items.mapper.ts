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

export interface Tracks {
  readonly trackSource: string;
  readonly audioTitle: string;
  readonly soloistName: string | null;
}

export interface TransformRecordsAudio {
  readonly recordTitle: string;
  readonly coverImageSource: string;
  readonly coverImageAltTranslationKey: string;
  readonly description: string;
  readonly albumId: RecordId;
  readonly tracks: Tracks[];
}

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
        coverImageAltTranslationKey: recordsAudioTo.CoverImageAltText,
        description: recordsAudioTo.Description,
        albumId: mapRecordId(recordsAudioTo.AlbumName),
        tracks: tracks,
      };
    })
    .reduce((result: TransformRecordsAudio[], item) => {
      const folders: string[] = [];

      result.forEach((record) => {
        if (folders.includes(record.albumId)) {
          return;
        } else {
          folders.push(record.albumId);
        }
      });

      if (folders.includes(item.albumId)) {
        const correctFolderIndex = result.findIndex((folder) => folder.albumId === item.albumId);
        result[correctFolderIndex].tracks.push(...item.tracks);
      } else {
        result.push(item);
      }

      return result;
    }, []);

  // const existingAlbum = result.find(album => album.albumId === item.albumId);
  // if (existingAlbum) {
  //   existingAlbum.tracks.push(...item.tracks);
  // } else {
  //   result.push(item);
  // }
};

// EZT KAPOD

/*   {
    recordTitle: recordsAudioTo.AlbumTitle,
    coverImageSource: recordsAudioTo.CoverImageSource,
    coverImageAltTranslationKey: recordsAudioTo.CoverImageAltText,
    description: recordsAudioTo.Description,
    albumId: recordsAudioTo.AlbumName,
    tracks: [
      {trackSource: recordsAudioTo.TrackSource,
      audioTitle: recordsAudioTo.RecordTitle,
      soloistName: recordsAudioTo.SoloistName}
    ],
    },
     {
    recordTitle: recordsAudioTo.AlbumTitle,
    coverImageSource: recordsAudioTo.CoverImageSource,
    coverImageAltTranslationKey: recordsAudioTo.CoverImageAltText,
    description: recordsAudioTo.Description,
    albumId: recordsAudioTo.AlbumName,
    tracks: [
      {trackSource: recordsAudioTo.TrackSource,
      audioTitle: recordsAudioTo.RecordTitle,
      soloistName: recordsAudioTo.SoloistName}
    ],
    },
     {
    recordTitle: recordsAudioTo.AlbumTitle,
    coverImageSource: recordsAudioTo.CoverImageSource,
    coverImageAltTranslationKey: recordsAudioTo.CoverImageAltText,
    description: recordsAudioTo.Description,
    albumId: recordsAudioTo.AlbumName,
    tracks: [
      {trackSource: recordsAudioTo.TrackSource,
      audioTitle: recordsAudioTo.RecordTitle,
      soloistName: recordsAudioTo.SoloistName}
    ],
    },






{
    "AlbumTitle": "Jubileumi lemez a zenekar fenn\u00e1ll\u00e1s\u00e1nak 10. \u00e9vfordul\u00f3ja alkalm\u00e1b",
    "CoverImageSource": "10borito",
    "CoverImageAltText": "A zenekar 2. lemez\u00e9nek bor\u00edt\u00f3k\u00e9pe",
    "Description": "2020 janu\u00e1rj\u00e1ban \u00e9s augusztus\u00e1ban r\u00f6gz\u00edtett\u00fck m\u00e1sodik lemez\u00fcnk anyag\u00e1t. A m\u0171veket az els\u0151 CD felv\u00e9tele \u00f3ta eltelt id\u0151szakban j\u00e1tszott, sz\u00edv\u00fcnkh\u00f6z k\u00f6zel \u00e1ll\u00f3 darabok k\u00f6z\u00fcl v\u00e1logattunk. Hangm\u00e9rn\u00f6k \u00e9s digit\u00e1lis ut\u00f3munka: R\u00e9dly D\u00e9nes.",
    "AlbumName": "TENTH_JUBILEUM",
    "TrackSource": "bach_short",
    "RecordTitle": "Johann Sebastian Bach - D-d\u00far zongoraverseny (BWV 1058, I. t\u00e9tel",
    "SoloistName": "Kir\u00e1ly Mikl\u00f3s"
  },

  {
    recordTitle: 'Jubileumi lemez a zenekar fennállásának 10. évfordulója alkalmából',
    coverImageSource: '10borito',
    coverImageAltTranslationKey: 'BVKZ.RECORDS__COMPONENT.REDORDS__SECOND_CD_COVER_ALT_TEXT',
    description:
      '2020 januárjában és augusztusában rögzítettük második lemezünk anyagát. A műveket az első CD felvétele óta eltelt időszakban játszott, szívünkhöz közel álló darabok közül válogattunk. Hangmérnök és digitális utómunka: Rédly Dénes.',
    albumId: 'TENTH_JUBILEUM',
    tracks: [
      {
        trackSource: 'saba_short',
        audioTitle: 'Georg Friedrich Handel - Sába királynőjének bevonulása (részlet a Salamon című oratóriumból)',
      },
      {
        trackSource: 'bach_short',
        audioTitle: 'Johann Sebastian Bach - D-dúr zongoraverseny (BWV 1058, I. tétel)',
        soloistName: 'Király Miklós',
      },
    ],
  },






// export const mapConcertPreviousResponseToConcertPreviousItems = (
//   concertPreviousResponse: readonly ConcertPreviousResponse[]
// ): readonly ConcertPreviousItem[] =>
//   concertPreviousResponse.map((concertPreviousItemDto: ConcertPreviousResponse) => ({
//     concertDate: concertPreviousItemDto.date,
//     concertPlace: concertPreviousItemDto.location,
//     concertLink: concertPreviousItemDto.url,
//     videoSource: concertPreviousItemDto.videoSource,
//   }));

// export interface RecordsAudioResponse {
//   readonly AlbumTitle: string;
//   readonly CoverImageSource: string;
//   readonly CoverImageAltText: string;
//   readonly Description: string;
//   readonly AlbumName: string;
//   readonly TrackSource: string;
//   readonly RecordTitle: string;
//   readonly SoloistName: string | null;
// }

// export interface RecordsFolderItem {
//   readonly recordTitle: string;
//   readonly coverImageSource: string;
//   readonly coverImageAltTranslationKey: string;
//   readonly description: string;
//   readonly albumId: RecordId;
//   readonly tracks: RecordAudioItem[];
// }

// export interface RecordAudioItem {
//   readonly trackSource: string;
//   readonly audioTitle: string;
//   readonly soloistName?: string;
// }

*/
