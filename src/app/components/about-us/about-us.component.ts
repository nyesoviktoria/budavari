import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ABOUT_US_GALLERY_ITEMS } from '../../constants/about-us-gallery-items-config.constants';

@Component({
  selector: 'bvkz-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutUsComponent {
  readonly imageItems = ABOUT_US_GALLERY_ITEMS;

  isOpen = false;

  onIsCollapsed(isOpen: boolean): void {
    this.isOpen = isOpen;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
