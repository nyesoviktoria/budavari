import { RecordId } from '../types/records.type';
import { RecordAudioItem } from './record-audio-item.interface';

export interface RecordItem {
  readonly recordTitle: string;
  readonly coverImageSource: string;
  readonly coverImageAltText: string;
  readonly description: string;
  readonly albumId: RecordId;
  readonly tracks: RecordAudioItem[];
}
