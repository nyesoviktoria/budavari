import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs';
import { fetchUpcomingConcerts, fetchUpcomingConcertsError, fetchUpcomingConcertsSuccess } from '../actions/upcoming-concerts.actions';
import { toErrorAction } from '../../../../utils/store-util/store-util';
import { mapConcertsUpcomingResponseToConcertUpcomingItems } from '../../../../mappers/concerts-upcoming-response-to-concert-upcoming-items/concerts-upcoming-response-to-concert-upcoming-items.mapper';
import { ConcertsService, GetUpcomingConcertsResponse } from '../../../../../../api';

@Injectable()
export class UpcomingConcertsEffects {
  fetchUpcomingConcerts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchUpcomingConcerts),
      switchMap(() => this.concertsService.getUpcomingConcerts()),
      map((response: GetUpcomingConcertsResponse) =>
        fetchUpcomingConcertsSuccess({ upcomingConcerts: mapConcertsUpcomingResponseToConcertUpcomingItems(response) })
      ),
      catchError(toErrorAction(fetchUpcomingConcertsError))
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly concertsService: ConcertsService
  ) {}
}
