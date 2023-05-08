import { ConcertPreviousItem } from '../concerts-previous-item.interface';
import { StandardWebRequestState } from './web-request-state.interface';

export type PreviousConcertsStandardWebRequestState = StandardWebRequestState<readonly ConcertPreviousItem[]>;
