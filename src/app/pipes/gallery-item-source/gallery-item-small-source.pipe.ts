import { Pipe, PipeTransform } from '@angular/core';
import { IMAGES_ROUTE } from '../../constants/app.constants';

@Pipe({
  name: 'galleryItemSmallSource',
})
export class GalleryItemSmallSourcePipe implements PipeTransform {
  transform(imageSource: string, folder: string): unknown {
    return `${IMAGES_ROUTE}gallery/${folder}/small/${imageSource}.webp`;
  }
}
