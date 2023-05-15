import { ConcertPreviousItem } from '../../interfaces/concerts-previous-item.interface';
import { ConcertsPreviousResponse } from '../../interfaces/concerts-previous-response.interface';

export const mapConcertsPreviousResponseToConcertPreviousItems = (
  concertPreviousResponse: readonly ConcertsPreviousResponse[]
): readonly ConcertPreviousItem[] =>
  concertPreviousResponse.map((concertPreviousItemDto: ConcertsPreviousResponse) => ({
    concertDate: concertPreviousItemDto.date,
    concertPlace: concertPreviousItemDto.location,
    concertLink: concertPreviousItemDto.url,
    videoSource: concertPreviousItemDto.videoSource,
  }));
