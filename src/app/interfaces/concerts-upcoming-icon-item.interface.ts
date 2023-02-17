import { UpcomingConcertIcon } from '../types/upcoming-concert-icons.type';

export interface ConcertsUpcomingIconItem {
  readonly iconHoverText: string;
  readonly concertUpcomingItemLineIdentifier: UpcomingConcertIcon;
  readonly iconSource: string;
  readonly iconImageAltText: string;
}
