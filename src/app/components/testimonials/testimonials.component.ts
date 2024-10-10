import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ICONS_ROUTE } from '../../constants/app.constants';
import { TESTIMONIAL_ITEMS } from '../../constants/testimonial-items-config.constants';

import { TranslateModule } from '@ngx-translate/core';
import { IconItemPipe } from '../../pipes/icon-item/icon-item.pipe';
import { ImageItemPipe } from '../../pipes/image-item/image-item.pipe';

@Component({
  selector: 'bvkz-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [TranslateModule, IconItemPipe, ImageItemPipe],
})
export class TestimonialsComponent {
  readonly iconsRoute = ICONS_ROUTE;
  readonly testimonialItems = TESTIMONIAL_ITEMS;

  onDotSelectClick(index: number): void {
    console.log('selected index: ', index);
  }
}
