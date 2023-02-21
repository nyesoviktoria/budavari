import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { toggleAnimation } from '../../constants/animations.constants';
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

  toggleVisibility(): void {
    this.isOpen = !this.isOpen;
    this.isCollapsed.emit(this.isOpen);
  }
}
