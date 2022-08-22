import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/general';

@Component({
  selector: 'app-courses-categories',
  templateUrl: './courses-categories.component.html',
  styleUrls: ['./courses-categories.component.scss']
})
export class CoursesCategoriesComponent implements OnInit {
	shortCourses: Course[] = [];

	constructor() { }

	ngOnInit(): void {
		this.shortCourses = this.getAllShortCourses();
	}

	getAllShortCourses(): Course[] {
		return [
			{
				_id: '63036994a2a32e9c3a2c5a12',
				name: 'Office Automation',
				teacher: 'Fakhar Zaman',
				image: '/assets/images/course-logo.png'
			},
			{
				_id: '63036994a2a32e9c3a2c5a32',
				name: 'Operating System',
				teacher: 'Fakhar Zaman',
				image: '/assets/images/course-logo.png'
			},
			{
				_id: '63036994a2a32e9c3a2c5a90',
				name: 'Auto Cad',
				teacher: 'Fakhar Zaman',
				image: '/assets/images/course-logo.png'
			},
			{
				_id: '63036994a2a32e9c3a2c5a23',
				name: 'Ecommerce',
				teacher: 'Fakhar Zaman',
				image: '/assets/images/course-logo.png'
			}
		]
	}
}
