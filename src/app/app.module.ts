import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FrameComponent } from './components/frame/frame.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { MembersComponent } from './components/members/members.component';
import { MemberDialogComponent } from './components/member-dialog/member-dialog.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SoloistsAndExMembersComponent } from './components/soloists-and-ex-members/soloists-and-ex-members.component';
import { RecordsContainerComponent } from './containers/records-container/records-container.component';
import { ContactContainerComponent } from './containers/contact-container/contact-container.component';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { RecordsAudioComponent } from './components/records-audio/records-audio.component';
import { RecordsAudioSourcePipe } from './pipes/records-audio-source/records-audio-source.pipe';
import { ConcertsContainerComponent } from './containers/concerts-container/concerts-container.component';
import { ConcertsUpcomingComponent } from './components/concerts-upcoming/concerts-upcoming.component';
import { ConcertsPreviousComponent } from './components/concerts-previous/concerts-previous.component';
import { VideosSourcePipe } from './pipes/videos-source/videos-source.pipe';
import { CountdownComponent } from './components/countdown/countdown.component';
import { GalleryContainerComponent } from './containers/gallery-container/gallery-container.component';
import { GalleryFolderComponent } from './components/gallery-folder/gallery-folder.component';
import { GalleryItemSourcePipe } from './pipes/gallery-item-source/gallery-item-source.pipe';
import { IconItemPipe } from './pipes/icon-item/icon-item.pipe';
import { GalleryDialogComponent } from './components/gallery-dialog/gallery-dialog.component';
import { MatCarouselModule } from '@magloft/material-carousel';
import { ConcertUpcomingIconsComponent } from './components/concert-upcoming-icons/concert-upcoming-icons.component';

export function HttpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AboutUsComponent,
    AccordionComponent,
    AppComponent,
    ConcertsContainerComponent,
    ConcertsPreviousComponent,
    ConcertsUpcomingComponent,
    ConcertUpcomingIconsComponent,
    ContactContainerComponent,
    ContactInformationComponent,
    CountdownComponent,
    FooterComponent,
    FrameComponent,
    GalleryContainerComponent,
    GalleryDialogComponent,
    GalleryFolderComponent,
    GalleryItemSourcePipe,
    HeaderComponent,
    HeroSectionComponent,
    HomeContainerComponent,
    IconItemPipe,
    JoinUsComponent,
    MemberDialogComponent,
    MembersComponent,
    RecordsAudioComponent,
    RecordsAudioSourcePipe,
    RecordsContainerComponent,
    SoloistsAndExMembersComponent,
    TestimonialsComponent,
    VideosSourcePipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatCarouselModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
