import { Component, OnInit } from '@angular/core';
import { IMAGES_ROUTE } from '../../constants/app.constants';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent implements OnInit {
  readonly imagesRoute = IMAGES_ROUTE;

  constructor() {}

  ngOnInit(): void {}
}
