export interface ConcertsUpcomingResponse {
  readonly ImageDesktopSource: string;
  readonly ImageMobileSource: string;
  readonly ImageAltText: string;
  readonly ConcertTitle: string;
  readonly ConcertDate: string;
  readonly ConcertDateCode: string;
  readonly ConcertLengthInMinutes: number;
  readonly ConcertLocation: string;
  readonly ConcertDescription: string;
  readonly ConcertInviteImageSource: string | null;
  readonly ConcertLocationMapUrl: string | null;
  readonly ConcertFacebookEventUrl: string | null;
}
