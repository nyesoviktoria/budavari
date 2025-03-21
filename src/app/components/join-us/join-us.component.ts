import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IMAGES_ROUTE } from '../../constants/app.constants';
import { TranslateModule } from '@ngx-translate/core';
import { ImageItemPipe } from '../../pipes/image-item/image-item.pipe';

@Component({
  selector: 'bvkz-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TranslateModule, ImageItemPipe],
})
export class JoinUsComponent {
  readonly imagesRoute = IMAGES_ROUTE;
}
