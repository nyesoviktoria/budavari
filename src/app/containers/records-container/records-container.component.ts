import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IMAGES_ROUTE } from '../../constants/app.constants';
import { Store } from '@ngrx/store';
import { fetchRecordsAudio } from './store/actions/records-audio.actions';
import { selectRecordsAudio } from './store/selectors/records-audio.selectors';
import { AsyncPipe } from '@angular/common';
import { LoaderComponent } from '../../components/loader/loader.component';
import { RecordsAudioComponent } from '../../components/records-audio/records-audio.component';
import { TranslateModule } from '@ngx-translate/core';
import { ImageItemPipe } from '../../pipes/image-item/image-item.pipe';
import { HasErrorPipe } from '../../pipes/web-request-state/has-error.pipe';
import { HasResultPipe } from '../../pipes/web-request-state/has-result.pipe';
import { IsLoadingPipe } from '../../pipes/web-request-state/is-loading.pipe';

@Component({
    selector: 'bvkz-records-container',
    templateUrl: './records-container.component.html',
    styleUrls: ['./records-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
    LoaderComponent,
    RecordsAudioComponent,
    AsyncPipe,
    TranslateModule,
    ImageItemPipe,
    HasErrorPipe,
    HasResultPipe,
    IsLoadingPipe
],
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
}
