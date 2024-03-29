import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConcertInviteDialogComponent } from '../../components/concert-invite-dialog/concert-invite-dialog.component';

import { Store } from '@ngrx/store';
import { fetchPreviousConcerts } from './store/actions/previous-concerts.actions';
import { selectPreviousConcerts } from './store/selectors/previous-concerts.selectors';
import { selectHasUpcomingConcerts, selectUpcomingConcerts } from './store/selectors/upcoming-concerts.selectors';
import { fetchUpcomingConcerts } from './store/actions/upcoming-concerts.actions';

@Component({
  selector: 'bvkz-concerts-container',
  templateUrl: './concerts-container.component.html',
  styleUrls: ['./concerts-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConcertsContainerComponent implements OnInit {
  private currentPlayedElement?: HTMLAudioElement;

  previousConcert$ = this.store.select(selectPreviousConcerts);
  upcomingConcert$ = this.store.select(selectUpcomingConcerts);
  hasUpcomingConcerts$ = this.store.select(selectHasUpcomingConcerts);

  constructor(private readonly store: Store, private readonly dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(fetchPreviousConcerts());
    this.store.dispatch(fetchUpcomingConcerts());
  }

  onPlay(element: HTMLVideoElement): void {
    if (this.currentPlayedElement && this.currentPlayedElement !== element) {
      this.currentPlayedElement.pause();
    }

    this.currentPlayedElement = element;
  }

  onOpenInviteDialog(inviteSource: string): void {
    this.dialog.open(ConcertInviteDialogComponent, {
      data: inviteSource,
    });
  }
}
