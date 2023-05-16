import { createSelector } from '@ngrx/store';
import { BvkzState } from '../../../../interfaces/states/bvkz-state.interface';
import { selectBvkzState } from '../../../../store/selectors/bvkz.selectors';

export const selectGallery = createSelector(selectBvkzState, (state: BvkzState) => state.gallery);
