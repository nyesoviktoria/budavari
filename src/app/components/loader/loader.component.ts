import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bvkz-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {}
