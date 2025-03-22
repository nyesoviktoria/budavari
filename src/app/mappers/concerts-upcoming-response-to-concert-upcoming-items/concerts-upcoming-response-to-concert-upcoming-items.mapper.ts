import { Concert, GetUpcomingConcertsResponse } from '../../../../api';
import { ConcertUpcomingItem } from '../../interfaces/concert-upcoming-item.interface';

export const mapConcertsUpcomingResponseToConcertUpcomingItems = ({
  concerts,
}: GetUpcomingConcertsResponse): readonly ConcertUpcomingItem[] =>
  concerts.map((concertUpcomingItemTo: Concert) => ({
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
