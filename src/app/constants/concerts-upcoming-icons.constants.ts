import { ConcertsUpcomingIconItem } from '../interfaces/concerts-upcoming-icon-item.interface';

export const CONCERTS_UPCOMING_ICONS: readonly ConcertsUpcomingIconItem[] = [
  {
    iconHoverText: 'Naptár',
    concertUpcomingItemLineIdentifier: 'calendar',
    iconSource: 'calendar-days',
    iconImageAltText: 'naptár ikon',
  },
  {
    iconHoverText: 'Térkép',
    concertUpcomingItemLineIdentifier: 'mapUrl',
    iconSource: 'map-location-dot',
    iconImageAltText: 'térkép ikon',
  },
  {
    iconHoverText: 'Facebook esemény',
    concertUpcomingItemLineIdentifier: 'facebookEventUrl',
    iconSource: 'square-facebook',
    iconImageAltText: 'facebook ikon',
  },
];
