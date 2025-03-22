import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap } from 'rxjs';
import { toErrorAction } from '../../../../utils/store-util/store-util';
import { fetchRecordsAudio, fetchRecordsAudioError, fetchRecordsAudioSuccess } from '../actions/records-audio.actions';
import { mapRecordsAudioResponseToRecordsFolderItems } from '../../../../mappers/records-audio-response-to-records-folder-items/records-audio-response-to-records-folder-items.mapper';
import { GetRecordsAudioResponse, RecordsService } from '../../../../../../api';

@Injectable()
export class RecordsAudioEffects {
  fetchRecordsAudio$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchRecordsAudio),
      switchMap(() => this.recordsService.getRecordsAudio()),
      map((response: GetRecordsAudioResponse) =>
        fetchRecordsAudioSuccess({ recordsAudio: mapRecordsAudioResponseToRecordsFolderItems(response) })
      ),
      catchError(toErrorAction(fetchRecordsAudioError))
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly recordsService: RecordsService
  ) {}
}
