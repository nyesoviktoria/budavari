import { Pipe, PipeTransform } from '@angular/core';

import { isResultState } from '../../typeguards/web-request-state.guards';
import { WebRequestState, ResultState } from '../../interfaces/states/web-request-state.interface';

@Pipe({
  name: 'hasResult',
})
export class HasResultPipe implements PipeTransform {
  transform<D, E>(request: WebRequestState<D, E>): request is ResultState<D> {
    return isResultState(request);
  }
}
