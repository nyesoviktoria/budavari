export interface NotAskedState {
  readonly isNotAsked: true;
}

export interface LoadingState {
  readonly isLoading: true;
}

export interface ResultState<D> {
  readonly data: D;
}

export interface ErrorState<E> {
  readonly error: E;
}

export declare type WebRequestState<D, E> = NotAskedState | LoadingState | ResultState<D> | ErrorState<E>;

export declare type StandardWebRequestState<D> = WebRequestState<D, string>;
