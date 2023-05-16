import { Pipe, PipeTransform } from '@angular/core';
import { IMAGES_ROUTE } from '../../constants/app.constants';

@Pipe({
  name: 'galleryItemThumbnailSource',
})
export class GalleryItemSmallSourcePipe implements PipeTransform {
  transform(imageSource: string, folder: string): string {
    return `${IMAGES_ROUTE}gallery/${folder}/thumbnail/${imageSource}.webp`;
  }
}
