import { Component, OnInit } from '@angular/core';
import { Annoucements, Course } from 'src/app/models/general';
import { GenericApiResponse } from 'src/app/models/response';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
	annoucements: Annoucements[];
	courses: Course[] = [];

	constructor(private apiService: ApiService) 
	{
		this.annoucements = [
			{ title: 'DIT Result Announced', image: '/assets/images/announcement-1.jpg', description: 'Once again excellent result this time.' },
			{ title: 'DIT Result Announced', image: '/assets/images/announcement-2.jpg', description: 'Once again excellent result this time.' },
			{ title: 'DIT Result Announced', image: '/assets/images/announcement-3.jpg', description: 'Once again excellent result this time.' },
			{ title: 'DIT Result Announced', image: '/assets/images/announcement-4.jpg', description: 'Once again excellent result this time.' },
		]
	}

	ngOnInit(): void {
		this.getAllCourses();
	}

	getAllCourses(): void {
		this.apiService.getData('courses').subscribe((resp: GenericApiResponse) => {
			this.courses = resp.data.courses;
		});
	}
}
