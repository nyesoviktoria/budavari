import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { toggleAnimation } from '../../constants/animations.constants';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IconItemPipe } from '../../pipes/icon-item/icon-item.pipe';
@Component({
  selector: 'bvkz-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [toggleAnimation],
  imports: [NgClass, TranslateModule, IconItemPipe],
})
export class AccordionComponent {
  readonly buttonName = input('');

  readonly isIcon = input(true);

  readonly isReverse = input(false);

  readonly isCollapsed = output<boolean>();

  isOpen = false;

  toggleVisibility(): void {
    this.isOpen = !this.isOpen;
    this.isCollapsed.emit(this.isOpen);
  }
}
