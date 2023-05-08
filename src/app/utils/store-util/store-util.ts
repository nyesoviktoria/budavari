import { HttpErrorResponse } from '@angular/common/http';
import { Action, ActionCreator, createAction, props } from '@ngrx/store';
import { Observable, of, switchMap, concat, throwError } from 'rxjs';

export interface TypedAction<T extends string> extends Action {
  readonly type: T;
}

export interface ErrorAction {
  readonly error: string;
}

export const createErrorAction = <T extends string>(type: T): ActionCreator<T, (props: ErrorAction) => ErrorAction & TypedAction<T>> =>
  createAction(type, props<ErrorAction>());

export const toErrorAction =
  (
    actionCreator: ActionCreator<string, (props: ErrorAction) => ErrorAction & TypedAction<string>>
  ): ((response: HttpErrorResponse) => Observable<Action>) =>
  (response: HttpErrorResponse): Observable<Action> =>
    of(response).pipe(
      switchMap((resp: HttpErrorResponse) => {
        return concat(
          of(actionCreator(resp)),
          throwError(() => resp)
        );
      })
    );
