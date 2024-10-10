import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ABOUT_US_GALLERY_ITEMS } from '../../constants/about-us-gallery-items-config.constants';
import { NgTemplateOutlet } from '@angular/common';
import { AccordionComponent } from '../accordion/accordion.component';
import { TranslateModule } from '@ngx-translate/core';
import { ImageItemPipe } from '../../pipes/image-item/image-item.pipe';

@Component({
  selector: 'bvkz-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgTemplateOutlet, AccordionComponent, TranslateModule, ImageItemPipe],
})
export class AboutUsComponent {
  readonly imageItems = ABOUT_US_GALLERY_ITEMS;

  isOpen = false;

  onIsCollapsed(isOpen: boolean): void {
    this.isOpen = isOpen;
  }
}
