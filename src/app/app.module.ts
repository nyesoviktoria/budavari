import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FrameComponent } from './components/frame/frame.component';
import { HomeContainerComponent } from './containers/home-container/home-container.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { MembersComponent } from './components/members/members.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AccordionComponent } from './components/accordion/accordion.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    AppComponent,
    FooterComponent,
    FrameComponent,
    HeaderComponent,
    HeroSectionComponent,
    HomeContainerComponent,
    MembersComponent,
    TestimonialsComponent,
    AccordionComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
