import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetchPreviousConcerts, fetchPreviousConcertsError, fetchPreviousConcertsSuccess } from '../actions/previous-concerts.actions';
import { catchError, map, switchMap } from 'rxjs';

import { ConcertsPreviousResponse } from '../../../../interfaces/concerts-previous-response.interface';
import { mapConcertsPreviousResponseToConcertPreviousItems } from '../../../../mappers/concerts-previous-response-to-concert-previous-items/concerts-previous-response-to-concert-previous-items.mapper';
import { toErrorAction } from '../../../../utils/store-util/store-util';
import { PreviousConcertsService } from '../../../../services/previous-concerts/previous-concerts.service';

@Injectable()
export class PreviousConcertsEffects {
  fetchPreviousConcerts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchPreviousConcerts),
      switchMap(() => this.previousConcertsService.getPreviousConcertsData()),
      map((response: readonly ConcertsPreviousResponse[]) =>
        fetchPreviousConcertsSuccess({ previousConcerts: mapConcertsPreviousResponseToConcertPreviousItems(response) })
      ),
      catchError(toErrorAction(fetchPreviousConcertsError))
    )
  );

  constructor(private readonly actions$: Actions, private readonly previousConcertsService: PreviousConcertsService) {}
}
