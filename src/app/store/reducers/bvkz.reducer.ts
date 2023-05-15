import { ActionReducerMap } from '@ngrx/store';
import { BvkzState } from '../../interfaces/states/bvkz-state.interface';
import { previousConcertsReducer } from '../../containers/concerts-container/store/reducers/previous-concerts.reducers';
import { recordsAudioReducer } from '../../containers/records-container/store/reducers/records-audio.reducers';
import { upcomingConcertsReducer } from '../../containers/concerts-container/store/reducers/upcoming-concerts.reducers';
import { galleryReducer } from '../../containers/gallery-container/store/reducers/gallery.reducers';

export const bvkzReducer: ActionReducerMap<BvkzState> = {
  upcomingConcerts: upcomingConcertsReducer,
  previousConcerts: previousConcertsReducer,
  gallery: galleryReducer,
  recordsAudio: recordsAudioReducer,
};
