import { patchState, signalStoreFeature, SignalStoreFeature, withMethods, withState } from '@ngrx/signals';
import { SignalStoreFeatureResult } from '@ngrx/signals/src/signal-store-models';

import { NOT_ASKED_WEB_REQUEST, LOADING_WEB_REQUEST } from '../../constants/web-request-state.constants';
import { WebRequestState } from '../../interfaces/states/web-request-state.interface';

export interface State<TResultState, TErrorState> {
  readonly state: WebRequestState<TResultState, TErrorState>;
}

export interface ErrorMessage {
  readonly error: string;
}

export const withWebRequestState = <TResultState, TErrorState = ErrorMessage>(): SignalStoreFeature<
  SignalStoreFeatureResult,
  {
    readonly state: State<TResultState, TErrorState>;
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    readonly props: {};
    readonly methods: {
      readonly resetState: () => void;
      readonly setLoadingState: () => void;
      readonly setErrorState: (errorState: TErrorState) => void;
      readonly setResultState: (resultState: TResultState) => void;
    };
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    readonly signals: {};
  }
> =>
  signalStoreFeature(
    withState<State<TResultState, TErrorState>>({
      state: NOT_ASKED_WEB_REQUEST,
    }),
    withMethods((store) => ({
      resetState: (): void =>
        patchState(store, {
          state: NOT_ASKED_WEB_REQUEST,
        }),
      setLoadingState: (): void =>
        patchState(store, {
          state: LOADING_WEB_REQUEST,
        }),
      setErrorState: (errorState: TErrorState): void =>
        patchState(store, {
          state: {
            error: errorState,
          },
        }),
      setResultState: (resultState: TResultState): void =>
        patchState(store, {
          state: {
            data: resultState,
          },
        }),
    }))
  );
