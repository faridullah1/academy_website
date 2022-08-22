import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CourseDetailComponent } from './components/courses/course-detail/course-detail.component';
import { CoursesCategoriesComponent } from './components/courses/courses-categories/courses-categories.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
	{ path: '', component: LandingPageComponent },
	{ path: 'courses', component: CoursesCategoriesComponent },
	{ path: 'courses/:id', component: CourseDetailComponent },
	{ path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
