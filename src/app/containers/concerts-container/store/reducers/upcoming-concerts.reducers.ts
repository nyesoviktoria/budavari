import { createReducer, on } from '@ngrx/store';
import { initialState } from './upcoming-concerts.state';
import {
  FetchUpcomingConcertsSuccessAction,
  fetchUpcomingConcerts,
  fetchUpcomingConcertsError,
  fetchUpcomingConcertsSuccess,
} from '../actions/upcoming-concerts.actions';
import { LOADING_WEB_REQUEST } from '../../../../constants/web-request-state.constants';
import { UpcomingConcertsStandardWebRequestState } from '../../../../interfaces/states/upcoming-concerts-standard-web-request-state.interface';

export const upcomingConcertsReducer = createReducer(
  initialState,

  on(fetchUpcomingConcerts, () => LOADING_WEB_REQUEST),

  on(
    fetchUpcomingConcertsSuccess,
    (_: UpcomingConcertsStandardWebRequestState, { upcomingConcerts }: FetchUpcomingConcertsSuccessAction) => ({
      data: upcomingConcerts,
    })
  ),

  on(fetchUpcomingConcertsError, () => ({ error: 'Fetch Upcoming Concerts Error' }))
);
