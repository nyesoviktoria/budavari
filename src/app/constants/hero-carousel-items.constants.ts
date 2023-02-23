import { HeroCarouselItem } from '../interfaces/hero-carousel-item.interface';
import { CONCERTS_PATH, GALLERY_PATH } from './routing.constants';

export const HERO_CAROUSEL_ITEMS: readonly HeroCarouselItem[] = [
  {
    imageMobileSource: 'slide2-mobile.webp',
    imageTabletSource: 'slide2.webp',
    imageDesktopSource: 'slide2-full.webp',
    slideTitle: 'BVKZ.HERO__COMPONENT.HERO_1__TITLE',
    slideText: 'BVKZ.HERO__COMPONENT.HERO_1__TEXT',
    navigateTo: CONCERTS_PATH,
    button: 'BVKZ.NAVIGATION__LINKS.CONCERTS',
  },
  {
    imageMobileSource: 'slide2-mobile.webp',
    imageTabletSource: 'slide2.webp',
    imageDesktopSource: 'slide2-full.webp',
    slideTitle: 'BVKZ.HERO__COMPONENT.HERO_2__TITLE',
    slideText: 'BVKZ.HERO__COMPONENT.HERO_2__TEXT',
    navigateTo: GALLERY_PATH,
    button: 'BVKZ.NAVIGATION__LINKS.GALLERY',
  },
];
