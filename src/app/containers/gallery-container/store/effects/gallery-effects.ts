import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GalleryService } from '../../../../services/gallery/gallery.service';
import { fetchGallerySuccess } from '../actions/gallery-actions';

@Injectable()
export class GalleryEffects {
  fetchGallery$ = createEffect(() =>
    this.actions$.pipe(
    ofType(fetchGallery),
    switchMap(() => this.galleryService.getGalleryData()),
    map((response: readonly GalleryResponse[])=> fetchGallerySuccess({gallery: ...(response)}))
  ));

  constructor(private readonly actions$: Actions, private readonly galleryService: GalleryService) {}
}
