export interface ConcertUpcomingItem {
  readonly imageDesktopSource: string;
  readonly imageMobileSource: string;
  readonly imageAltText: string;
  readonly title: string;
  readonly date: string;
  readonly dateCode: string;
  readonly concertLengthInMinutes: number;
  readonly place: string;
  readonly description: string;
  readonly inviteImageSource: string | null;
  readonly mapUrl: string | null;
  readonly facebookEventUrl: string | null;
}
