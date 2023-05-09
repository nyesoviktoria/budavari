import { ConcertUpcomingItem } from '../interfaces/concerts-upcoming-item.interface';

export const CONCERTS_UPCOMING_ITEMS: readonly ConcertUpcomingItem[] = [
  {
    number: 1,
    imageDesktopSource: 'szegedi-dom-desktop',
    imageMobileSource: 'szegedi-dom-mobile',
    imageAltTranslationKey: '',
    title: 'Koncert a Szegedi Dómban',
    date: '2023. május 27., 18:00',
    dateCode: '2023-05-27T17:00',
    concertLengthInMinutes: 60,
    place: 'Szeged Dóm tér 15, 6720',
    description:
      'Nem először látja vendégül zenekarunkat a Szegedi Dóm, a Lassus Énekegyüttes és Varjasi Gyula karnagy. Együttműködéseink során szinte már hagyománnyá vált, hogy a szentmise keretében Mozart valamelyik missa brevisét - ez alkalommal a Spatzen Messe-t (KV 220) - adjuk elő. ',
    inviteImageSource: 'mozart',
    mapUrl: 'https://goo.gl/maps/23nARtjyrZbkHcto6?coh=178572&entry=tt',
  },
  {
    number: 2,
    imageDesktopSource: 'stabat-mater-desktop',
    imageMobileSource: 'stabat-mater-mobile',
    imageAltTranslationKey: '',
    title: 'Pergolesi: Stabat Mater',
    date: '2023. május 27., 19:00',
    dateCode: '2023-05-27T18:00',
    concertLengthInMinutes: 60,
    place: 'Szeged Dóm tér 15, 6720',
    description: 'A mise után a kórussal közös koncertünkön Pergolesi csodálatos Stabat Materét hallhatja a közönség.',
    inviteImageSource: 'pergolesi',
    mapUrl: 'https://goo.gl/maps/23nARtjyrZbkHcto6?coh=178572&entry=tt',
  },
];

const lastConcert: ConcertUpcomingItem = {
  number: 1,
  imageDesktopSource: 'janos-passio',
  imageMobileSource: 'janos-passio-mobile',
  imageAltTranslationKey: 'BVKZ.CONCERTS_CONTAINER__COMPONENT.CONCERTS_UPCOMING__IMAGE_ALT_TEXT',
  title: 'Johann Sebastian Bach: János-passió, BWV 245',
  date: '2023. március 18., 19:30',
  dateCode: '2023-03-18T19:30',
  concertLengthInMinutes: 120,
  place: 'Belvárosi Ferences Templom, Ferenciek tere 9.',
  description:
    'Nehezen tudunk elfogódottság nélkül közelíteni ehhez a fantasztikus zeneműhöz, így nagy megtiszteltetés számunkra, hogy harmadik alkalommal játszhatjuk Bach János-passióját a Pesti Ferences Templomban.',
  inviteImageSource: 'janos-passio-invite',
  mapUrl: 'https://goo.gl/maps/W9LXZQKcwSJkYmKh9',
};
