import { createSelector } from '@ngrx/store';
import { BvkzState } from '../../../../interfaces/states/bvkz-state.interface';
import { selectBvkzState } from '../../../../store/selectors/bvkz.selectors';
import { isLoadingState, isResultState } from '../../../../typeguards/web-request-state.guards';

export const selectUpcomingConcerts = createSelector(selectBvkzState, (state: BvkzState) => state.upcomingConcerts);

export const selectHasUpcomingConcerts = createSelector(selectBvkzState, (state: BvkzState) => {
  if (isLoadingState(state.upcomingConcerts)) {
    return true;
  }

  if (isResultState(state.upcomingConcerts)) {
    return state.upcomingConcerts.data.length > 0;
  }

  return false;
});
