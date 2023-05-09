import { createSelector } from '@ngrx/store';
import { BvkzState } from '../../../../interfaces/states/bvkz-state.interface';
import { selectBvkzState } from '../../../../store/selectors/bvkz.selectors';

export const selectRecordsAudio = createSelector(selectBvkzState, (state: BvkzState) => state.recordsAudio);
