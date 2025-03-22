import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchGallery, fetchGallerySuccess } from '../actions/gallery-actions';
import { switchMap, map } from 'rxjs';
import { mapGalleryResponseToGalleryFolderItems } from '../../../../mappers/gallery-response-to-gallery-folder-items/gallery-response-to-gallery-folder-items.mapper';
import { GetGalleryResponse, GalleryService } from '../../../../../../api';

@Injectable()
export class GalleryEffects {
  fetchGallery$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchGallery),
      switchMap(() => this.galleryService.getGallery()),
      map((response: GetGalleryResponse) => fetchGallerySuccess({ gallery: mapGalleryResponseToGalleryFolderItems(response) }))
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly galleryService: GalleryService
  ) {}
}
