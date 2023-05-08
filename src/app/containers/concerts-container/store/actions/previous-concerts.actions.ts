import { createAction, props } from '@ngrx/store';
import { ConcertPreviousItem } from '../../../../interfaces/concerts-previous-item.interface';
import { createErrorAction } from '../../../../utils/store-util/store-util';

export interface FetchPreviousConcertsSuccessAction {
  previousConcerts: readonly ConcertPreviousItem[];
}

export const fetchPreviousConcerts = createAction('[Concerts] Fetch Previous Concerts');

export const fetchPreviousConcertsSuccess = createAction(
  '[concerts] Fetch Previous Concerts Success',
  props<FetchPreviousConcertsSuccessAction>()
);

export const fetchPreviousConcertsError = createErrorAction('[concerts] Fetch Previous Concerts Error');
