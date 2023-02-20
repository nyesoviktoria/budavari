import { Pipe, PipeTransform } from '@angular/core';
import { VIDEOS_ROUTE } from '../../constants/app.constants';

@Pipe({
  name: 'videosSource',
})
export class VideosSourcePipe implements PipeTransform {
  transform(videoSource: string): string {
    return `${VIDEOS_ROUTE}${videoSource}.mp4`;
  }
}
