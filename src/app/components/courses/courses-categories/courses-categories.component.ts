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
				teacher: {
					fullName: 'Fakhar Zaman',
					photo: '/assets/images/course-logo.png',
					profileSummary: 'I am full stack developer and Instructor. My main expertise are in HTML, CSS and Javascript.'
				},
				image: '/assets/images/course-logo.png',
				audience: 'This is a beginner-friendly course for office automation.',
				outline: [],
				description: 'This is one of the best courses for Office automation.',
				price: 5000
			}
		]
	}
}
