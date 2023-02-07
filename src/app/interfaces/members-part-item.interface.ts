import { PartNames } from '../types/part-names.type';

export interface MembersPartItem {
  readonly partName: PartNames;
  readonly imageSource: string;
  readonly altText: string;
  // TODO: ide kell egy interface esetleg at is lehetne nevezni MembersPart es ez lenne a MembersPartItem
  readonly members: { memberName: string; memberId: string }[];
  readonly isMiddleCart: boolean;
}
