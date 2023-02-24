import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnDestroy, OnInit } from '@angular/core';

import { CountdownResult } from '../../interfaces/countdown-result.interface';

import { Observable, Subject, interval, takeUntil, filter, tap, BehaviorSubject } from 'rxjs';
import {
  CHARACTERS_TO_COUNTDOWN,
  HOURS_IN_A_DAY,
  ICONS_ROUTE,
  MILLISECONDS_TO_SECONDS_COUNTER,
  MINUTES_IN_AN_HOUR,
  SECONDS_IN_A_MINUTE,
} from '../../constants/app.constants';

import { getTime } from 'date-fns';

@Component({
  selector: 'bvkz-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input() dateTo!: string;

  @Input() index!: number;

  @Input() endMessage = 'A koncert befejeződött';

  @Output() isConcertVisible = new EventEmitter<number>();

  readonly iconsRoute = ICONS_ROUTE;

  readonly countdownResult$ = new BehaviorSubject<CountdownResult>({
    seconds: '',
    minutes: '',
    hours: '',
    days: '',
  });

  totalSecondes!: number;

  interval$!: Observable<number>;

  private readonly objectDestroySource$ = new Subject<void>();

  ngOnInit(): void {
    this.initSimpleCountdown();

    if (this.totalSecondes < 0) {
      this.isConcertVisible.emit(this.index);
    }
  }

  ngOnDestroy(): void {
    this.objectDestroySource$.next();
    this.objectDestroySource$.complete();
  }

  private initSimpleCountdown(): void {
    this.totalSecondes =
      getTime(new Date(this.dateTo)) / MILLISECONDS_TO_SECONDS_COUNTER - Math.floor(Date.now() / MILLISECONDS_TO_SECONDS_COUNTER);

    this.getCountdownResult(this.totalSecondes);

    this.interval$ = interval(MILLISECONDS_TO_SECONDS_COUNTER).pipe(
      takeUntil(this.objectDestroySource$),
      filter(() => this.totalSecondes > 0),
      tap(() => {
        this.totalSecondes--;

        this.getCountdownResult(this.totalSecondes);
      })
    );

    this.interval$.subscribe();
  }

  private getCountdownResult(secondes: number): void {
    this.countdownResult$.next({
      seconds: String(Math.floor(secondes % SECONDS_IN_A_MINUTE)).padStart(CHARACTERS_TO_COUNTDOWN, '0'),
      minutes: String(Math.floor((secondes / SECONDS_IN_A_MINUTE) % MINUTES_IN_AN_HOUR)).padStart(CHARACTERS_TO_COUNTDOWN, '0'),
      hours: String(Math.floor((secondes / (SECONDS_IN_A_MINUTE * MINUTES_IN_AN_HOUR)) % HOURS_IN_A_DAY)).padStart(
        CHARACTERS_TO_COUNTDOWN,
        '0'
      ),
      days: String(Math.floor(secondes / (SECONDS_IN_A_MINUTE * MINUTES_IN_AN_HOUR * HOURS_IN_A_DAY))),
    });
  }
}
