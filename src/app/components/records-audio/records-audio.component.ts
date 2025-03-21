import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { AUDIO_ROUTE } from '../../constants/app.constants';
import { RecordAudioItem } from '../../interfaces/record-audio-item.interface';
import { RecordId } from '../../types/record-id.type';

import { TranslateModule } from '@ngx-translate/core';
import { RecordsAudioSourcePipe } from '../../pipes/records-audio-source/records-audio-source.pipe';

@Component({
  selector: 'bvkz-records-audio',
  templateUrl: './records-audio.component.html',
  styleUrls: ['./records-audio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, RecordsAudioSourcePipe],
})
export class RecordsAudioComponent {
  readonly track = input.required<RecordAudioItem>();
  readonly album = input.required<RecordId>();
  readonly audio = output<HTMLAudioElement>();

  readonly audioRoute = AUDIO_ROUTE;

  onPlay(audio: HTMLAudioElement): void {
    this.audio.emit(audio);
  }
}
