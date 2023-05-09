import { RecordId } from '../types/record-id.type';
import { RecordAudioItem } from './record-audio-item.interface';

export interface RecordsFolderItem {
  readonly recordTitle: string;
  readonly coverImageSource: string;
  readonly coverImageAltTranslationKey: string;
  readonly description: string;
  readonly albumId: RecordId;
  readonly tracks: RecordAudioItem[];
}
