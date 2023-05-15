import { createReducer, on } from '@ngrx/store';
import { initialState } from './gallery.state';
import { LOADING_WEB_REQUEST } from '../../../../constants/web-request-state.constants';
import { FetchGallerySuccessAction, fetchGallery, fetchGalleryError, fetchGallerySuccess } from '../actions/gallery-actions';
import { GalleryStandardWebRequestState } from '../../../../interfaces/states/gallery-standard-web-request-state.interface';

export const galleryReducer = createReducer(
  initialState,

  on(fetchGallery, () => LOADING_WEB_REQUEST),

  on(fetchGallerySuccess, (_: GalleryStandardWebRequestState, { gallery }: FetchGallerySuccessAction) => ({
    data: gallery,
  })),

  on(fetchGalleryError, () => ({ error: 'Fetch Gallery Error' }))
);
