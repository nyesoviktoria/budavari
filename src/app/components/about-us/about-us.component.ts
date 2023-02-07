import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IMAGES_ROUTE } from '../../constants/app.constants';
import { ABOUTUS_GALLERY_ITEMS } from '../../constants/aboutus-gallery-items-config.constant';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent {
  readonly imageItems = ABOUTUS_GALLERY_ITEMS;
  readonly imagesRoute = IMAGES_ROUTE;

  trackByIndex(index: number): number {
    return index;
  }
}
