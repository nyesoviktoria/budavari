import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IMAGES_ROUTE } from '../../constants/app.constants';
import { ABOUT_US_GALLERY_ITEMS } from '../../constants/about-us-gallery-items-config.constant';

@Component({
  selector: 'bvkz-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent {
  readonly imageItems = ABOUT_US_GALLERY_ITEMS;
  readonly imagesRoute = IMAGES_ROUTE;

  trackByIndex(index: number): number {
    return index;
  }
}
