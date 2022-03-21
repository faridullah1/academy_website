import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/general';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.scss']
})
export class CoursesDetailComponent implements OnInit {
	shortCourses: Course[] = [];

	constructor() { }

	ngOnInit(): void {
		this.shortCourses = this.getAllShortCourses();
	}

	getAllShortCourses(): Course[] {
		return [
			{
				name: 'Office Automation',
				teacher: 'Fakhar Zaman',
				image: '/assets/images/course-logo.png'
			},
			{
				name: 'Operating System',
				teacher: 'Fakhar Zaman',
				image: '/assets/images/course-logo.png'
			},
			{
				name: 'Auto Cad',
				teacher: 'Fakhar Zaman',
				image: '/assets/images/course-logo.png'
			},
			{
				name: 'Ecommerce',
				teacher: 'Fakhar Zaman',
				image: '/assets/images/course-logo.png'
			}
		]
	}
}
