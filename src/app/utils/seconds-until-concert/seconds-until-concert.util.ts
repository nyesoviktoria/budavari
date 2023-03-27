import { getTime } from 'date-fns';
import { MILLISECONDS_TO_SECONDS_COUNTER } from '../../constants/app.constants';

export const secondsUntilConcert = (dateCode: string): number =>
  getTime(new Date(dateCode)) / MILLISECONDS_TO_SECONDS_COUNTER - Math.floor(Date.now() / MILLISECONDS_TO_SECONDS_COUNTER);
