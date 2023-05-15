import { ConcertUpcomingItem } from '../concert-upcoming-item.interface';
import { StandardWebRequestState } from './web-request-state.interface';

export type UpcomingConcertsStandardWebRequestState = StandardWebRequestState<readonly ConcertUpcomingItem[]>;
