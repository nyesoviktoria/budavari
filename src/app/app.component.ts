import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, Subject, takeUntil } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/ban-types
declare let gtag: Function;

@Component({
  selector: 'bvkz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private readonly objectDestroySource$ = new Subject<void>();

  constructor(private readonly translateService: TranslateService, private readonly router: Router) {
    this.translateService.use('hu');
  }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(
        takeUntil(this.objectDestroySource$),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        filter((event: any) => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        gtag('config', 'G-2EXKBT4YV6', { page_path: event.urlAfterRedirects });
      });
  }

  ngOnDestroy(): void {
    this.objectDestroySource$.next();
    this.objectDestroySource$.complete();
  }
}
