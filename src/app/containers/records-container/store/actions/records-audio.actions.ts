import { createAction, props } from '@ngrx/store';
import { RecordsFolderItem } from '../../../../interfaces/record-item.interface';
import { createErrorAction } from '../../../../utils/store-util/store-util';

export interface FetchRecordsAudioSuccessAction {
  recordsAudio: readonly RecordsFolderItem[];
}

export const fetchRecordsAudio = createAction('[Records] Fetch Records Audio');

export const fetchRecordsAudioSuccess = createAction('[Records] Fetch Records Audio Success', props<FetchRecordsAudioSuccessAction>());

export const fetchRecordsAudioError = createErrorAction('[Records] Fetch Records Audio Error');
