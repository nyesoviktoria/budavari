import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConcertInviteDialogComponent } from '../../components/concert-invite-dialog/concert-invite-dialog.component';

import { Store } from '@ngrx/store';
import { fetchPreviousConcerts } from './store/actions/previous-concerts.actions';
import { selectPreviousConcerts } from './store/selectors/previous-concerts.selectors';
import { selectHasUpcomingConcerts, selectUpcomingConcerts } from './store/selectors/upcoming-concerts.selectors';
import { fetchUpcomingConcerts } from './store/actions/upcoming-concerts.actions';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from '../../components/loader/loader.component';
import { ConcertsUpcomingComponent } from '../../components/concerts-upcoming/concerts-upcoming.component';
import { ConcertsPreviousComponent } from '../../components/concerts-previous/concerts-previous.component';
import { TranslateModule } from '@ngx-translate/core';
import { HasErrorPipe } from '../../pipes/web-request-state/has-error.pipe';
import { HasResultPipe } from '../../pipes/web-request-state/has-result.pipe';
import { IsLoadingPipe } from '../../pipes/web-request-state/is-loading.pipe';

@Component({
    selector: 'bvkz-concerts-container',
    templateUrl: './concerts-container.component.html',
    styleUrls: ['./concerts-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
    LoaderComponent,
    ConcertsUpcomingComponent,
    ConcertsPreviousComponent,
    AsyncPipe,
    TranslateModule,
    HasErrorPipe,
    HasResultPipe,
    IsLoadingPipe
],
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
