import { RecordsFolderItem } from '../record-item.interface';
import { StandardWebRequestState } from './web-request-state.interface';

export type RecordsAudioStandardWebRequestState = StandardWebRequestState<readonly RecordsFolderItem[]>;
