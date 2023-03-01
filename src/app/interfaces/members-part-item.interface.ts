import { PartNames } from '../types/part-names.type';
import { MemberItem } from './member-item.interface';

export interface MembersPartItem {
  readonly partName: PartNames;
  readonly imageSource: string;
  readonly altTranslationKey: string;
  readonly members: readonly MemberItem[];
  readonly isMiddleCart: boolean;
}
