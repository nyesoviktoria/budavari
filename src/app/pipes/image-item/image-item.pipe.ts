import { Pipe, PipeTransform } from '@angular/core';
import { IMAGES_ROUTE } from '../../constants/app.constants';

@Pipe({
    name: 'imageItem',
    standalone: true,
})
export class ImageItemPipe implements PipeTransform {
  transform(image: string): unknown {
    return `${IMAGES_ROUTE}${image}.webp`;
  }
}
