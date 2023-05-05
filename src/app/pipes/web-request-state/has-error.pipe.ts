import { Pipe, PipeTransform } from '@angular/core';
import { WebRequestState, ErrorState } from '../../interfaces/states/web-request-state.interface';
import { isErrorState } from '../../typeguards/web-request-state.guards';

@Pipe({
  name: 'hasError',
})
export class HasErrorPipe implements PipeTransform {
  transform<D, E>(request: WebRequestState<D, E>): request is ErrorState<E> {
    return isErrorState(request);
  }
}
