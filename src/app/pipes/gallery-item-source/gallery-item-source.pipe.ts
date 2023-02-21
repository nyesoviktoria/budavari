import { Pipe, PipeTransform } from '@angular/core';
import { IMAGES_ROUTE } from '../../constants/app.constants';

@Pipe({
  name: 'galleryItemSource',
})
export class GalleryItemSourcePipe implements PipeTransform {
  transform(folder: string, imageSource: string): unknown {
    return `${IMAGES_ROUTE}gallery/${folder}/${imageSource}.webp`;
  }
}
