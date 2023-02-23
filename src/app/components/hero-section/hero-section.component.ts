import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IMAGES_ROUTE } from '../../constants/app.constants';
import { HERO_CAROUSEL_ITEMS } from '../../constants/hero-carousel-items.constants';

@Component({
  selector: 'bvkz-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  readonly imagesRoute = IMAGES_ROUTE;
  readonly heroCarouselItems = HERO_CAROUSEL_ITEMS;

  trackByIndex(index: number): number {
    return index;
  }
}
