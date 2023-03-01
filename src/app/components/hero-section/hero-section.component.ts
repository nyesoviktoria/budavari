import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MILLISECONDS_TO_CAROUSEL_SLIDE_CHANGE } from '../../constants/app.constants';
import { HERO_CAROUSEL_ITEMS } from '../../constants/hero-carousel-items.constants';

@Component({
  selector: 'bvkz-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  readonly heroCarouselItems = HERO_CAROUSEL_ITEMS;
  readonly carouselEaseInTiming = '700ms ease-in';
  readonly carouselTiming = MILLISECONDS_TO_CAROUSEL_SLIDE_CHANGE;

  trackByIndex(index: number): number {
    return index;
  }
}
