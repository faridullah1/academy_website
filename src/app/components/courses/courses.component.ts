import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/general';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
	@Input() courses: Course[] = [];
	
	constructor() { }
}
