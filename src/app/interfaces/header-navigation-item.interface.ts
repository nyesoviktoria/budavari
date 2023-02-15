import { PageNavigationTitles } from '../types/page-navigation-titles.type';

export interface HeaderNavigationItem {
  readonly pageTitle: PageNavigationTitles;
  readonly pageRoute: string;
}
