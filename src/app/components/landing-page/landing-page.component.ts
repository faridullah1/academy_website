import { Component, OnInit } from '@angular/core';
import { Annoucements, Course, SystemSetting } from 'src/app/models/general';
import { GenericApiResponse } from 'src/app/models/response';
import { ApiService } from 'src/app/services/api.service';
import { ConfigService } from 'src/app/services/config.service';


@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [ConfigService]
})
export class LandingPageComponent implements OnInit {
	settings: SystemSetting;
	annoucements: Annoucements[];
	courses: Course[] = [];
	mapAddressStyles = {
		'padding': '0 6rem'
	}

	constructor(private apiService: ApiService, private configService: ConfigService) 
	{
		this.annoucements = [
			{ title: 'DIT Result Announced', image: '/assets/images/announcement-1.jpg', description: 'Once again excellent result this time.' },
			{ title: 'DIT Result Announced', image: '/assets/images/announcement-2.jpg', description: 'Once again excellent result this time.' },
			{ title: 'DIT Result Announced', image: '/assets/images/announcement-3.jpg', description: 'Once again excellent result this time.' },
			{ title: 'DIT Result Announced', image: '/assets/images/announcement-4.jpg', description: 'Once again excellent result this time.' },
		];
	}

	ngOnInit(): void {
		this.configService.settings.subscribe(data => {
			this.settings = data;
		});

		this.getAllCourses();
	}

	getAllCourses(): void {
		this.apiService.getData('courses').subscribe((resp: GenericApiResponse) => {
			this.courses = resp.data.courses;
		});
	}
}
