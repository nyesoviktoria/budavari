import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { ConcertInviteDialogComponent } from '../../components/concert-invite-dialog/concert-invite-dialog.component';
import { ConcertPreviousItem } from '../../interfaces/concerts-previous-item.interface';
import { mapConcertPreviousResponseToConcertPreviousItems } from '../../mappers/concert-previous-response-to-concert-previous-items/concert-previous-response-to-concert-previous-items.mapper';
import { PreviousConcertsService } from '../../services/previous-concert/previous-concerts.service';

@Component({
  selector: 'bvkz-concerts-container',
  templateUrl: './concerts-container.component.html',
  styleUrls: ['./concerts-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConcertsContainerComponent implements OnInit {
  private currentPlayedElement?: HTMLAudioElement;

  concertsPreviousItems$!: Observable<readonly ConcertPreviousItem[]>;

  constructor(private readonly previousConcertsService: PreviousConcertsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.concertsPreviousItems$ = this.previousConcertsService
      .getPreviousConcertsData()
      .pipe(map(mapConcertPreviousResponseToConcertPreviousItems));
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
