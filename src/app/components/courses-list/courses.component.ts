import { Component, Input } from '@angular/core';
import { Course } from 'src/app/models/general';


@Component({
  selector: 'courses-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesListComponent {
	@Input() courses: Course[] = [];
	
	constructor() { }
}
