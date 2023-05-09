import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { RecordsAudioService } from '../../../../services/records-audio/records-audio.service';
import { catchError, map, switchMap } from 'rxjs';
import { toErrorAction } from '../../../../utils/store-util/store-util';
import { fetchRecordsAudio, fetchRecordsAudioError, fetchRecordsAudioSuccess } from '../actions/records-audio.actions';
import { RecordsAudioResponse } from '../../../../interfaces/records-audio-response.interface';
import { mapRecordsAudioResponseToRecordsFolderItems } from '../../../../mappers/records-audio-response-to-records-folder-items/records-audio-response-to-records-folder-items.mapper';

@Injectable()
export class RecordsAudioEffects {
  fetchRecordsAudio$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchRecordsAudio),
      switchMap(() => this.recordsAudioService.getRecordsAudioData()),
      map((response: readonly RecordsAudioResponse[]) =>
        fetchRecordsAudioSuccess({ recordsAudio: mapRecordsAudioResponseToRecordsFolderItems(response) })
      ),
      catchError(toErrorAction(fetchRecordsAudioError))
    )
  );

  constructor(private readonly actions$: Actions, private readonly recordsAudioService: RecordsAudioService) {}
}
