export interface ConcertUpcomingItem {
  readonly number: number;
  readonly imageDesktopSource: string;
  readonly imageMobileSource: string;
  readonly imageAltTranslationKey: string;
  readonly title: string;
  readonly date: string;
  readonly dateCode: string;
  readonly concertLengthInMinutes: number;
  readonly place: string;
  readonly description: string;
  readonly inviteImageSource?: string;
  readonly mapUrl?: string;
  readonly facebookEventUrl?: string;
}
