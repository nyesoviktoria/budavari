import { PreviousConcertsEffects } from '../../containers/concerts-container/store/effects/previous-concerts.effects';
import { UpcomingConcertsEffects } from '../../containers/concerts-container/store/effects/upcoming-concerts.effects';
import { GalleryEffects } from '../../containers/gallery-container/store/effects/gallery-effects';
import { RecordsAudioEffects } from '../../containers/records-container/store/effects/records-audio.effets';

export const effects = [UpcomingConcertsEffects, PreviousConcertsEffects, GalleryEffects, RecordsAudioEffects];
