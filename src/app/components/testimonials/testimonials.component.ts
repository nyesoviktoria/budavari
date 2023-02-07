import { Component } from '@angular/core';
import { IMAGES_ROUTE } from '../../constants/app.constants';
import { ICONS_ROUTE } from '../../constants/app.constants';
import { TESTIMONIAL_ITEMS } from '../../constants/testimonial-items-config.constans';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {
  readonly iconsRoute = ICONS_ROUTE;
  readonly imagesRoute = IMAGES_ROUTE;
  readonly testimonialItems = TESTIMONIAL_ITEMS;

  constructor() {}

  ngOnInit(): void {}
}
