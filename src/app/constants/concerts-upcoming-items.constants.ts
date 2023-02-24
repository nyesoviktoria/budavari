import { ConcertUpcomingItem } from '../interfaces/concerts-upcoming-item.interface';

export const CONCERTS_UPCOMING_ITEMS: readonly ConcertUpcomingItem[] = [
  {
    number: 1,
    imageDesktopSource: 'janos-passio.webp',
    imageMobileSource: 'janos-passio-mobile.webp',
    title: 'J.S.Bach - János-passió',
    date: '2023. március 18.',
    dateCode: '2023-03-18T19:00',
    concertLengthInMinutes: 120,
    place: 'Belvárosi Ferences Templom, Ferenciek tere 9.',
    description:
      '5 év után ismét az a megtiszteltetés éri a zenekart, hogy közreműködhet J.S.Bach János-passiójának nagyböjti előadásában. Mindene kedves érdeklődőt szeretettel várunk.',
    mapUrl: 'https://goo.gl/maps/W9LXZQKcwSJkYmKh9',
  },
];
