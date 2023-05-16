import { Pipe, PipeTransform } from '@angular/core';
import { IMAGES_ROUTE } from '../../constants/app.constants';

@Pipe({
  name: 'galleryItemSource',
})
export class GalleryItemSourcePipe implements PipeTransform {
  transform(imageSource: string, folder: string): string {
    return `${IMAGES_ROUTE}gallery/${folder}/${imageSource}.webp`;
  }
}
