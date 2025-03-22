import { GetPreviousConcertsResponse, PreviousConcert } from '../../../../api';
import { ConcertPreviousItem } from '../../interfaces/concerts-previous-item.interface';

export const mapConcertsPreviousResponseToConcertPreviousItems = ({
  concerts,
}: GetPreviousConcertsResponse): readonly ConcertPreviousItem[] =>
  concerts.map((concertPreviousItemDto: PreviousConcert) => ({
    concertDate: concertPreviousItemDto.ConcertDate,
    concertPlace: concertPreviousItemDto.ConcertLocation,
    concertLink: concertPreviousItemDto.ConcertUrl,
    videoSource: concertPreviousItemDto.VideoSource,
  }));
