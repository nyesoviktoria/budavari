import { createAction, props } from '@ngrx/store';
import { createErrorAction } from '../../../../utils/store-util/store-util';
import { ConcertUpcomingItem } from '../../../../interfaces/concert-upcoming-item.interface';

export interface FetchUpcomingConcertsSuccessAction {
  upcomingConcerts: readonly ConcertUpcomingItem[];
}

export const fetchUpcomingConcerts = createAction('[Concerts] Fetch Upcoming Concerts');

export const fetchUpcomingConcertsSuccess = createAction(
  '[Concerts] Fetch Upcoming Concerts Success',
  props<FetchUpcomingConcertsSuccessAction>()
);

export const fetchUpcomingConcertsError = createErrorAction('[Concerts] Fetch Upcoming Concerts Error');
