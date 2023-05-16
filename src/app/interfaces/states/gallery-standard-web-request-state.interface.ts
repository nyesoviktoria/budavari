import { GalleryFolderItem } from '../gallery-folder-item.interface';
import { StandardWebRequestState } from './web-request-state.interface';

export type GalleryStandardWebRequestState = StandardWebRequestState<readonly GalleryFolderItem[]>;
