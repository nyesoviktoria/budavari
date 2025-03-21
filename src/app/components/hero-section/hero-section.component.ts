import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MILLISECONDS_TO_CAROUSEL_SLIDE_CHANGE } from '../../constants/app.constants';
import { HERO_CAROUSEL_ITEMS } from '../../constants/hero-carousel-items.constants';
import { MatCarouselModule } from '@magloft/material-carousel';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ImageItemPipe } from '../../pipes/image-item/image-item.pipe';

@Component({
  selector: 'bvkz-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCarouselModule, NgClass, RouterLink, TranslateModule, ImageItemPipe],
})
export class HeroSectionComponent {
  readonly heroCarouselItems = HERO_CAROUSEL_ITEMS;
  readonly carouselEaseInTiming = '700ms ease-in';
  readonly carouselTiming = MILLISECONDS_TO_CAROUSEL_SLIDE_CHANGE;
}
