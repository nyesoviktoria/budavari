import { Type } from '@angular/core';
import { HasErrorPipe } from './web-request-state/has-error.pipe';
import { HasResultPipe } from './web-request-state/has-result.pipe';
import { IsLoadingPipe } from './web-request-state/is-loading.pipe';

export const pipes: readonly Type<unknown>[] = [HasErrorPipe, HasResultPipe, IsLoadingPipe];
