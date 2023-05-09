import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IMAGES_ROUTE } from '../../constants/app.constants';
import { Store } from '@ngrx/store';
import { fetchRecordsAudio } from './store/actions/records-audio.actions';
import { selectRecordsAudio } from './store/selectors/records-audio.selectors';

@Component({
  selector: 'bvkz-records-container',
  templateUrl: './records-container.component.html',
  styleUrls: ['./records-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordsContainerComponent implements OnInit {
  readonly recordItems$ = this.store.select(selectRecordsAudio);
  readonly imagesRoute = IMAGES_ROUTE;

  private currentPlayedElement?: HTMLAudioElement;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(fetchRecordsAudio());
  }

  onPlay(element: HTMLAudioElement): void {
    if (this.currentPlayedElement && this.currentPlayedElement !== element) {
      this.currentPlayedElement.pause();
    }

    this.currentPlayedElement = element;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
