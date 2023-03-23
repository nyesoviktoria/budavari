import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxPaginationModule } from 'ngx-pagination';

import { AboutUsComponent } from './components/about-us/about-us.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConcertInviteDialogComponent } from './components/concert-invite-dialog/concert-invite-dialog.component';
import { ConcertsContainerComponent } from './containers/concerts-container/concerts-container.component';
import { ConcertsPreviousComponent } from './components/concerts-previous/concerts-previous.component';
import { ConcertsUpcomingComponent } from './components/concerts-upcoming/concerts-upcoming.component';
import { ConcertUpcomingIconsComponent } from './components/concert-upcoming-icons/concert-upcoming-icons.component';
import { ContactContainerComponent } from './containers/contact-container/contact-container.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { FooterComponent } from './components/footer/footer.component';
import { FrameComponent } from './components/frame/frame.component';
import { GalleryContainerComponent } from './containers/gallery-container/gallery-container.component';
import { GalleryDialogComponent } from './components/gallery-dialog/gallery-dialog.component';
import { GalleryFolderComponent } from './components/gallery-folder/gallery-folder.component';
import { GalleryItemSourcePipe } from './pipes/gallery-item-source/gallery-item-source.pipe';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { IconItemPipe } from './pipes/icon-item/icon-item.pipe';
import { ImageItemPipe } from './pipes/image-item/image-item.pipe';
import { JoinUsComponent } from './components/join-us/join-us.component';
import { MatCarouselModule } from '@magloft/material-carousel';
import { MatDialogModule } from '@angular/material/dialog';
import { MemberDialogComponent } from './components/member-dialog/member-dialog.component';
import { MembersComponent } from './components/members/members.component';
import { MembersDialogImageSourcePipe } from './pipes/members-dialog-image-source/members-dialog-image-source.pipe';
import { RecordsAudioComponent } from './components/records-audio/records-audio.component';
import { RecordsAudioSourcePipe } from './pipes/records-audio-source/records-audio-source.pipe';
import { RecordsContainerComponent } from './containers/records-container/records-container.component';
import { SoloistsAndExMembersComponent } from './components/soloists-and-ex-members/soloists-and-ex-members.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { VideosSourcePipe } from './pipes/videos-source/videos-source.pipe';

export function HttpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AboutUsComponent,
    AccordionComponent,
    AppComponent,
    ConcertInviteDialogComponent,
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
    ImageItemPipe,
    JoinUsComponent,
    MemberDialogComponent,
    MembersComponent,
    MembersDialogImageSourcePipe,
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
    NgxPaginationModule,
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
