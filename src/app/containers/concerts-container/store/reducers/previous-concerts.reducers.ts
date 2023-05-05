import { createReducer, on } from '@ngrx/store';
import { initialState } from './previous-concerts.state';
import {
  FetchPreviousConcertsSuccessAction,
  fetchPreviousConcerts,
  fetchPreviousConcertsError,
  fetchPreviousConcertsSuccess,
} from '../actions/previous-concerts.actions';

import { PreviousConcertsStandardWebRequestState } from '../../../../interfaces/states/previous-concerts-standard-web-request-state.interface';
import { LOADING_WEB_REQUEST } from '../../../../constants/web-request-state.constants';

export const previousConcertsReducer = createReducer(
  initialState,

  on(fetchPreviousConcerts, () => LOADING_WEB_REQUEST),

  on(
    fetchPreviousConcertsSuccess,
    (_: PreviousConcertsStandardWebRequestState, { previousConcerts }: FetchPreviousConcertsSuccessAction) => ({
      data: previousConcerts,
    })
  ),

  on(fetchPreviousConcertsError, () => ({ error: 'fetch Previous Concerts Error' }))
);
