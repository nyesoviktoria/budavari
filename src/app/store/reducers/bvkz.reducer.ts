import { ActionReducerMap } from '@ngrx/store';
import { BvkzState } from '../../interfaces/states/bvkz-state.interface';
import { previousConcertsReducer } from '../../containers/concerts-container/store/reducers/previous-concerts.reducers';

export const bvkzReducer: ActionReducerMap<BvkzState> = {
  previousConcerts: previousConcertsReducer,
};
