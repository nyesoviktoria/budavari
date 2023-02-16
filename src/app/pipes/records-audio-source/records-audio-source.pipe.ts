import { Pipe, PipeTransform } from '@angular/core';
import { AUDIO_ROUTE } from '../../constants/app.constants';

@Pipe({
  name: 'recordsAudioSource',
})
export class RecordsAudioSourcePipe implements PipeTransform {
  transform(album: string, trackSource: string): string {
    return `${AUDIO_ROUTE}${album}/${trackSource}.mp3`;
  }
}
