import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UpcomingConcertsService } from '../../../../services/upcoming-concerts/upcoming-concerts.service';
import { catchError, map, switchMap } from 'rxjs';
import { fetchUpcomingConcerts, fetchUpcomingConcertsError, fetchUpcomingConcertsSuccess } from '../actions/upcoming-concerts.actions';
import { ConcertsUpcomingResponse } from '../../../../interfaces/concerts-upcoming-response.interface';
import { toErrorAction } from '../../../../utils/store-util/store-util';
import { mapConcertsUpcomingResponseToConcertUpcomingItems } from '../../../../mappers/concerts-upcoming-response-to-concert-upcoming-items/concerts-upcoming-response-to-concert-upcoming-items.mapper';

@Injectable()
export class UpcomingConcertsEffects {
  fetchUpcomingConcerts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchUpcomingConcerts),
      switchMap(() => this.upcomingConcertsService.getUpcomingConcertsData()),
      map((response: readonly ConcertsUpcomingResponse[]) =>
        fetchUpcomingConcertsSuccess({ upcomingConcerts: mapConcertsUpcomingResponseToConcertUpcomingItems(response) })
      ),
      catchError(toErrorAction(fetchUpcomingConcertsError))
    )
  );

  constructor(private readonly actions$: Actions, private readonly upcomingConcertsService: UpcomingConcertsService) {}
}
