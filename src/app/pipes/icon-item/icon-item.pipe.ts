import { Pipe, PipeTransform } from '@angular/core';
import { ICONS_ROUTE } from '../../constants/app.constants';

@Pipe({
  name: 'iconItem',
})
export class IconItemPipe implements PipeTransform {
  transform(icon: string): unknown {
    return `${ICONS_ROUTE}${icon}.svg`;
  }
}
