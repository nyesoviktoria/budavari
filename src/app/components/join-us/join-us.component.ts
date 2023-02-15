import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IMAGES_ROUTE } from '../../constants/app.constants';

@Component({
  selector: 'bvkz-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JoinUsComponent {
  readonly imagesRoute = IMAGES_ROUTE;
}
