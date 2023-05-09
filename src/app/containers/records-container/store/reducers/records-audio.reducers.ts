import { createReducer, on } from '@ngrx/store';
import { initialState } from './records-audio.state';
import { LOADING_WEB_REQUEST } from '../../../../constants/web-request-state.constants';
import { RecordsAudioStandardWebRequestState } from '../../../../interfaces/states/records-audio-standard-web-request-state.interface';
import {
  FetchRecordsAudioSuccessAction,
  fetchRecordsAudio,
  fetchRecordsAudioError,
  fetchRecordsAudioSuccess,
} from '../actions/records-audio.actions';

export const recordsAudioReducer = createReducer(
  initialState,

  on(fetchRecordsAudio, () => LOADING_WEB_REQUEST),

  on(fetchRecordsAudioSuccess, (_: RecordsAudioStandardWebRequestState, { recordsAudio }: FetchRecordsAudioSuccessAction) => ({
    data: recordsAudio,
  })),

  on(fetchRecordsAudioError, () => ({ error: 'fetch Records Audio Error' }))
);
