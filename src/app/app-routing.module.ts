import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesDetailComponent } from './components/courses-detail/courses-detail.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
	{ path: '', component: LandingPageComponent },
	{ path: 'courses', component: CoursesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
