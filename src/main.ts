import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpLoaderFactory } from './app/app.module';
import { BVKZ_FEATURE_NAME } from './app/constants/store.constants';
import { bvkzReducer } from './app/store/reducers/bvkz.reducer';
import { provideHttpClient, withInterceptorsFromDi, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app/app-routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { MatCarouselModule } from '@magloft/material-carousel';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './app/store/effects/bvkz.effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './environments/environment.prod';
import { pipes } from './app/pipes';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(AppRoutingModule, BrowserModule, MatCarouselModule, MatDialogModule, NgxPaginationModule, TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient],
            },
        }), EffectsModule.forRoot([...effects]), StoreModule.forRoot(), StoreModule.forFeature(BVKZ_FEATURE_NAME, bvkzReducer), StoreDevtoolsModule.instrument({ logOnly: environment.production, connectInZone: true }), ...pipes),
        { provide: BVKZ_FEATURE_NAME, useValue: bvkzReducer }, provideHttpClient(withInterceptorsFromDi()),
        provideAnimations()
    ]
})
  // eslint-disable-next-line no-console
  .catch((err) => console.error(err));
