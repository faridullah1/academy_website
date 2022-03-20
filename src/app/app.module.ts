import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoursesDetailComponent } from './components/courses-detail/courses-detail.component';
import { CoursesListComponent } from './components/courses-list/courses.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    CoursesListComponent,
    CoursesDetailComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
