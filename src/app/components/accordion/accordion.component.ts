import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { toggleAnimation } from '../../constants/animations.constants';
import { NgClass, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IconItemPipe } from '../../pipes/icon-item/icon-item.pipe';
@Component({
    selector: 'bvkz-accordion',
    templateUrl: './accordion.component.html',
    styleUrls: ['./accordion.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [toggleAnimation],
    standalone: true,
    imports: [
        NgClass,
        NgIf,
        TranslateModule,
        IconItemPipe,
    ],
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
