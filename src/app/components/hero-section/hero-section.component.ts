import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IMAGES_ROUTE } from '../../constants/app.constants';
import { MatCarousel, MatCarouselComponent, MatCarouselSlide, MatCarouselSlideComponent } from '@magloft/material-carousel';

@Component({
  selector: 'bvkz-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  readonly imagesRoute = IMAGES_ROUTE;
}
