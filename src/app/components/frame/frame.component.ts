import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'bvkz-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
