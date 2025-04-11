import { inject } from '@angular/core';
import { pipe, tap, switchMap } from 'rxjs';

import { signalStore, withMethods } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { withWebRequestState } from '../../../utils/store-util/signal-store.util';
import { ConcertsService, GetUpcomingConcertsResponse, UpcomingConcert } from '../../../../../api';
import { secondsUntilConcert } from '../../../utils/seconds-until-concert/seconds-until-concert.util';

export type ConcertState = readonly UpcomingConcert[];

export const ConcertsStoreService = signalStore(
  withWebRequestState<ConcertState>(),
  withMethods((store, concertsService: ConcertsService = inject(ConcertsService)) => ({
    fetchConcerts: rxMethod<void>(
      pipe(
        tap(() => store.setLoadingState()),
        switchMap(() =>
          concertsService.getUpcomingConcerts().pipe(
            tapResponse({
              next: ({ concerts }: GetUpcomingConcertsResponse) =>
                store.setResultState(concerts.filter(({ ConcertDate }: UpcomingConcert) => secondsUntilConcert(ConcertDate) > 0)),
              error: ({ error: { error } }: HttpErrorResponse) => {
                store.setErrorState({ error });
              },
            })
          )
        )
      )
    ),
  }))
);
