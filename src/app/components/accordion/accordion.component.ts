import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { toggleAnimation } from '../../constants/animations.constants';
import { ICONS_ROUTE } from '../../constants/app.constants';

@Component({
  selector: 'bvkz-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [toggleAnimation],
})
export class AccordionComponent {
  @Input() buttonName = '';

  @Input() isIcon = true;

  @Input() isReverse = false;

  @Output() isCollapsed = new EventEmitter<boolean>();

  isOpen = false;

  readonly iconsRoute = ICONS_ROUTE;

  toggleVisibility(): void {
    this.isOpen = !this.isOpen;
    this.isCollapsed.emit(this.isOpen);
  }
}
