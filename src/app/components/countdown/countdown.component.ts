import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnDestroy, OnInit } from '@angular/core';

import { CountdownResult } from '../../interfaces/countdown-result.interface';

import { Observable, Subject, interval, takeUntil, filter, tap, BehaviorSubject } from 'rxjs';
import {
  HOURS_IN_A_DAY,
  ICONS_ROUTE,
  INITIAL_NUMBER,
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

  // output ami kikopi, hogz vegzett (void)

  readonly iconsRoute = ICONS_ROUTE;

  countdownResult$ = new BehaviorSubject<CountdownResult>({
    seconds: INITIAL_NUMBER,
    minutes: INITIAL_NUMBER,
    hours: INITIAL_NUMBER,
    day: INITIAL_NUMBER,
  });

  dateNow!: number;
  totalSecondes!: number;

  interval$!: Observable<number>;

  private readonly objectDestroySource$ = new Subject<void>();

  ngOnInit(): void {
    this.dateNow = this.getDateNow();
    this.initSimpleCountdown();

    if (this.totalSecondes < INITIAL_NUMBER) {
      this.isConcertVisible.emit(this.index);
    }
  }

  ngOnDestroy(): void {
    this.objectDestroySource$.next();
    this.objectDestroySource$.complete();
  }

  private initSimpleCountdown(): void {
    this.totalSecondes = getTime(new Date(this.dateTo)) / MILLISECONDS_TO_SECONDS_COUNTER - this.dateNow;

    this.getCountdownResult(this.totalSecondes);
    console.log(this.totalSecondes);

    this.interval$ = interval(MILLISECONDS_TO_SECONDS_COUNTER).pipe(
      takeUntil(this.objectDestroySource$),
      filter(() => this.totalSecondes > INITIAL_NUMBER),
      tap(() => {
        this.totalSecondes--;

        this.getCountdownResult(this.totalSecondes);
      })
    );

    this.interval$.subscribe();
  }

  private getCountdownResult(secondes: number): void {
    this.countdownResult$.next({
      seconds: Math.floor(secondes % SECONDS_IN_A_MINUTE),
      minutes: Math.floor((secondes / SECONDS_IN_A_MINUTE) % MINUTES_IN_AN_HOUR),
      hours: Math.floor((secondes / (SECONDS_IN_A_MINUTE * MINUTES_IN_AN_HOUR)) % HOURS_IN_A_DAY),
      day: Math.floor(secondes / (SECONDS_IN_A_MINUTE * MINUTES_IN_AN_HOUR * HOURS_IN_A_DAY)),
    });
  }

  private getDateNow(): number {
    return Math.floor(Date.now() / MILLISECONDS_TO_SECONDS_COUNTER);
  }
}
