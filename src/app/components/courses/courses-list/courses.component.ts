import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/general';


@Component({
  selector: 'courses-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesListComponent {
	@Input() courses: Course[] = [];
	
	constructor(private router: Router) { }

	onViewCourseDetails(course: Course): void {
		console.log(course)
		this.router.navigate(['courses', course._id])
	}
}
