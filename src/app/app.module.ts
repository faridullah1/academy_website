import { EllipsisPipe } from './pipes/ellipses.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { CoursesCategoriesComponent } from './components/courses/courses-categories/courses-categories.component';
import { CoursesListComponent } from './components/courses/courses-list/courses.component';
import { CourseDetailComponent } from './components/courses/course-detail/course-detail.component';

import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AddressInfoComponent } from './components/address-info/address-info.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		AppComponent,
		LandingPageComponent,
		HeaderComponent,
		FooterComponent,
		CoursesListComponent,
		CoursesCategoriesComponent,
    	CourseDetailComponent,
		CarouselComponent,
		ContactUsComponent,
		AddressInfoComponent,
  		EllipsisPipe
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		ReactiveFormsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
