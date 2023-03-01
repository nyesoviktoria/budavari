import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConcertInviteDialogComponent } from '../../components/concert-invite-dialog/concert-invite-dialog.component';
import { ConcertPreviousItem } from '../../interfaces/concerts-previous-item.interface';
import { mapConcertPreviousResponseToConcertPreviousItems } from '../../mappers/concert-previous-response-to-concert-previous-items/concert-previous-response-to-concert-previous-items.mapper';
import { ConcertPreviousResponse, PreviousConcertsService } from '../../services/previous-concerts.service';

@Component({
  selector: 'bvkz-concerts-container',
  templateUrl: './concerts-container.component.html',
  styleUrls: ['./concerts-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConcertsContainerComponent implements OnInit {
  private currentPlayedElement?: HTMLAudioElement;

  isConcertPreviousItemsExist = true;

  concertsPreviousItems: readonly ConcertPreviousItem[] = [];

  constructor(private readonly previousConcertsService: PreviousConcertsService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.previousConcertsService.getPreviousConcertsData().subscribe((response: readonly ConcertPreviousResponse[]) => {
      this.concertsPreviousItems = mapConcertPreviousResponseToConcertPreviousItems(response);
    }, (() => {
      this.isConcertPreviousItemsExist = false;
    }));
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
