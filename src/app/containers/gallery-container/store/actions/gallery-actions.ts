import { createAction, props } from '@ngrx/store';
import { createErrorAction } from '../../../../utils/store-util/store-util';
import { GalleryFolderItem } from '../../../../interfaces/gallery-folder-item.interface';

export interface FetchGallerySuccessAction {
  gallery: readonly GalleryFolderItem[];
}

export const fetchGallery = createAction('[Gallery] Fetch Gallery');

export const fetchGallerySuccess = createAction('[Gallery] Fetch Gallery Success', props<FetchGallerySuccessAction>());

export const fetchGalleryError = createErrorAction('[Gallery] Fetch Gallery Error');
