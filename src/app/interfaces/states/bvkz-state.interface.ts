import { GalleryStandardWebRequestState } from './gallery-standard-web-request-state.interface';
import { PreviousConcertsStandardWebRequestState } from './previous-concerts-standard-web-request-state.interface';
import { RecordsAudioStandardWebRequestState } from './records-audio-standard-web-request-state.interface';

export interface BvkzState {
  readonly previousConcerts: PreviousConcertsStandardWebRequestState;
  readonly gallery: GalleryStandardWebRequestState;
  readonly recordsAudio: RecordsAudioStandardWebRequestState;
}
