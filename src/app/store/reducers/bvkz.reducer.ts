import { ActionReducerMap } from '@ngrx/store';
import { BvkzState } from '../../interfaces/states/bvkz-state.interface';
import { previousConcertsReducer } from '../../containers/concerts-container/store/reducers/previous-concerts.reducers';
import { recordsAudioReducer } from '../../containers/records-container/store/reducers/records-audio.reducers';

export const bvkzReducer: ActionReducerMap<BvkzState> = {
  previousConcerts: previousConcertsReducer,
  recordsAudio: recordsAudioReducer,
};
