import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GalleryService } from '../../../../services/gallery/gallery.service';
import { fetchGallery, fetchGallerySuccess } from '../actions/gallery-actions';
import { switchMap, map } from 'rxjs';
import { GalleryResponse } from '../../../../interfaces/gallery-response.interface';
import { mapGalleryResponseToGalleryFolderItems } from '../../../../mappers/gallery-response-to-gallery-folder-items/gallery-response-to-gallery-folder-items.mapper';

@Injectable()
export class GalleryEffects {
  fetchGallery$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchGallery),
      switchMap(() => this.galleryService.getGalleryData()),
      map((response: readonly GalleryResponse[]) => fetchGallerySuccess({ gallery: mapGalleryResponseToGalleryFolderItems(response) }))
    )
  );

  constructor(private readonly actions$: Actions, private readonly galleryService: GalleryService) {}
}
