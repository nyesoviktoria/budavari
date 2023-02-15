import { MemberIds } from '../types/member-ids.type';

export interface MemberDialogItem {
  readonly name: string;
  readonly memberId: MemberIds;
  readonly imageSource: string;
}
