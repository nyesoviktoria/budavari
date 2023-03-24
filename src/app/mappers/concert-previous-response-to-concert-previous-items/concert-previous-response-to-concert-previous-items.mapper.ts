import { ConcertPreviousItem } from '../../interfaces/concerts-previous-item.interface';
import { ConcertPreviousResponse } from '../../interfaces/concerts-previous-response.interface';

export const mapConcertPreviousResponseToConcertPreviousItems = (
  concertPreviousResponse: readonly ConcertPreviousResponse[]
): readonly ConcertPreviousItem[] =>
  concertPreviousResponse.map((concertPreviousItemDto: ConcertPreviousResponse) => ({
    concertDate: concertPreviousItemDto.date,
    concertPlace: concertPreviousItemDto.location,
    concertLink: concertPreviousItemDto.url,
    videoSource: concertPreviousItemDto.videoSource,
  }));
