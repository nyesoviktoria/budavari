import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AUDIO_ROUTE } from '../../constants/app.constants';
import { RecordAudioItem } from '../../interfaces/record-audio-item.interface';
import { RecordId } from '../../types/record-id.type';

@Component({
  selector: 'bvkz-records-audio',
  templateUrl: './records-audio.component.html',
  styleUrls: ['./records-audio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordsAudioComponent {
  @Input() track!: RecordAudioItem;
  @Input() album!: RecordId;
  @Output() audio = new EventEmitter<HTMLAudioElement>();

  readonly audioRoute = AUDIO_ROUTE;

  onPlay(audio: HTMLAudioElement): void {
    this.audio.emit(audio);
  }
}
