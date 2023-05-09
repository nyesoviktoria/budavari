import { PreviousConcertsStandardWebRequestState } from './previous-concerts-standard-web-request-state.interface';
import { RecordsAudioStandardWebRequestState } from './records-audio-standard-web-request-state.interface';

export interface BvkzState {
  readonly previousConcerts: PreviousConcertsStandardWebRequestState;
  readonly recordsAudio: RecordsAudioStandardWebRequestState;
}
