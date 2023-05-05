import { createFeatureSelector } from '@ngrx/store';
import { BvkzState } from '../../interfaces/states/bvkz-state.interface';
import { BVKZ_FEATURE_NAME } from '../../constants/store.constants';

export const selectBvkzState = createFeatureSelector<BvkzState>(BVKZ_FEATURE_NAME);
