import { Pipe, PipeTransform } from '@angular/core';
import { MEMBER_IMAGES_ROUTE } from '../../constants/app.constants';

@Pipe({
  name: 'membersDialogImageSource',
})
export class MembersDialogImageSourcePipe implements PipeTransform {
  transform(image: string): unknown {
    return `${MEMBER_IMAGES_ROUTE}${image}.webp`;
  }
}
