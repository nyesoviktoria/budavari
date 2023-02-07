import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IMAGES_ROUTE } from '../../constants/app.constants';
import { ICONS_ROUTE } from '../../constants/app.constants';
import { TESTIMONIAL_ITEMS } from '../../constants/testimonial-items-config.constant';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  readonly iconsRoute = ICONS_ROUTE;
  readonly imagesRoute = IMAGES_ROUTE;
  readonly testimonialItems = TESTIMONIAL_ITEMS;

  onDotSelectClick(index: number): void {
    console.log('selected index: ', index);
  }

  trackByIndex(index: number): number {
    return index;
  }
}
