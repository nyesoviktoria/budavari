import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetchPreviousConcerts, fetchPreviousConcertsError, fetchPreviousConcertsSuccess } from '../actions/previous-concerts.actions';
import { catchError, map, switchMap } from 'rxjs';
import { PreviousConcertsService } from '../../../../services/previous-concert/previous-concerts.service';
import { ConcertPreviousResponse } from '../../../../interfaces/concerts-previous-response.interface';
import { mapConcertPreviousResponseToConcertPreviousItems } from '../../../../mappers/concert-previous-response-to-concert-previous-items/concert-previous-response-to-concert-previous-items.mapper';
import { toErrorAction } from '../../../../utils/store-util/store-util';

@Injectable()
export class PreviousConcertsEffects {
  fetchPreviousConcerts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchPreviousConcerts),
      switchMap(() => this.previousConcertsService.getPreviousConcertsData()),
      map((response: readonly ConcertPreviousResponse[]) =>
        fetchPreviousConcertsSuccess({ previousConcerts: mapConcertPreviousResponseToConcertPreviousItems(response) })
      ),
      catchError(toErrorAction(fetchPreviousConcertsError))
    )
  );

  constructor(private readonly actions$: Actions, private readonly previousConcertsService: PreviousConcertsService) {}
}
