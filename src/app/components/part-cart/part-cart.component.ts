import { Component } from '@angular/core';
import { IMAGES_ROUTE } from '../../constants/app.constants';
import { MEMBERS_PARTS_ITEMS } from '../../constants/members-part-items-config.constans';

@Component({
  selector: 'app-part-cart',
  templateUrl: './part-cart.component.html',
  styleUrls: ['./part-cart.component.css'],
})
export class PartCartComponent {
  readonly imagesRoute = IMAGES_ROUTE;
  readonly membersPartItems = MEMBERS_PARTS_ITEMS;

  // TODO: ide kell egy output ami kiemittalja az adott emberke ID-jat

  constructor() {}

  ngOnInit(): void {}
}
