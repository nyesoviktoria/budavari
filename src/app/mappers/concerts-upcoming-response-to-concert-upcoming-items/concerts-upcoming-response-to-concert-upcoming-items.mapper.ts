import { ConcertUpcomingItem } from '../../interfaces/concert-upcoming-item.interface';
import { ConcertsUpcomingResponse } from '../../interfaces/concerts-upcoming-response.interface';

export const mapConcertsUpcomingResponseToConcertUpcomingItems = (
  concertUpcomingResponse: readonly ConcertsUpcomingResponse[]
): readonly ConcertUpcomingItem[] =>
  concertUpcomingResponse.map((concertUpcomingItemTo: ConcertsUpcomingResponse) => ({
    imageDesktopSource: concertUpcomingItemTo.ImageDesktopSource,
    imageMobileSource: concertUpcomingItemTo.ImageMobileSource,
    imageAltText: concertUpcomingItemTo.ImageAltText,
    title: concertUpcomingItemTo.ConcertTitle,
    date: concertUpcomingItemTo.ConcertDate,
    dateCode: concertUpcomingItemTo.ConcertDateCode,
    concertLengthInMinutes: concertUpcomingItemTo.ConcertLengthInMinutes,
    place: concertUpcomingItemTo.ConcertLocation,
    description: concertUpcomingItemTo.ConcertDescription,
    inviteImageSource: concertUpcomingItemTo.ConcertInviteImageSource,
    mapUrl: concertUpcomingItemTo.ConcertLocationMapUrl,
    facebookEventUrl: concertUpcomingItemTo.ConcertFacebookEventUrl,
  }));
