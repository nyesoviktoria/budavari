import { Pipe, PipeTransform } from '@angular/core';

import { isLoadingState } from '../../typeguards/web-request-state.guards';
import { WebRequestState, LoadingState } from '../../interfaces/states/web-request-state.interface';

@Pipe({
  name: 'isLoading',
})
export class IsLoadingPipe implements PipeTransform {
  transform<D, E>(request: WebRequestState<D, E>): request is LoadingState {
    return isLoadingState(request);
  }
}
