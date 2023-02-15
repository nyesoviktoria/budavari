import { HeaderNavigationItem } from '../interfaces/header-navigation-item.interface';
import { CONCERTS_ROUTE, CONTACT_ROUTE, GALLERY_ROUTE, RECORDS_ROUTE } from './routing.constants';

export const HEADER_NAVIGATION_ITEMS: readonly HeaderNavigationItem[] = [
  {
    pageTitle: 'CONCERTS',
    pageRoute: CONCERTS_ROUTE,
  },
  {
    pageTitle: 'GALLERY',
    pageRoute: GALLERY_ROUTE,
  },
  {
    pageTitle: 'CONTACT',
    pageRoute: CONTACT_ROUTE,
  },
  {
    pageTitle: 'RECORDS',
    pageRoute: RECORDS_ROUTE,
  },
];
