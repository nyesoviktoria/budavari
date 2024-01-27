import { HeroCarouselItem } from '../interfaces/hero-carousel-item.interface';
import { CONCERTS_PATH, GALLERY_PATH } from './routing.constants';

export const HERO_CAROUSEL_ITEMS: readonly HeroCarouselItem[] = [
  {
    imageMobileSource: 'slide1-mobile-godollo',
    imageTabletSource: 'slide1-tablet-godollo',
    imageDesktopSource: 'slide1-desktop-godollo',
    imageAltTranslationKey: 'BVKZ.HERO__COMPONENT.HERO_1__IMAGE_ALT_TEXT',
    slideTitle: 'BVKZ.HERO__COMPONENT.HERO_1__TITLE',
    slideText: 'BVKZ.HERO__COMPONENT.HERO_1__TEXT',
    navigateTo: CONCERTS_PATH,
    button: 'BVKZ.NAVIGATION__LINKS.CONCERTS',
  },
  {
    imageMobileSource: 'slide2-mobile',
    imageTabletSource: 'slide2-tablet',
    imageDesktopSource: 'slide2-desktop',
    imageAltTranslationKey: 'BVKZ.HERO__COMPONENT.HERO_2__IMAGE_ALT_TEXT',
    slideTitle: 'BVKZ.HERO__COMPONENT.HERO_2__TITLE',
    slideText: 'BVKZ.HERO__COMPONENT.HERO_2__TEXT',
    navigateTo: GALLERY_PATH,
    button: 'BVKZ.NAVIGATION__LINKS.GALLERY',
  },
];
