import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrameComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
