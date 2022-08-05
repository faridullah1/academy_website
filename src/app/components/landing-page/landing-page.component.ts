import { Component, OnInit } from '@angular/core';
import { Announcement, Course, SystemSetting } from 'src/app/models/general';
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
	announcements: Announcement[] = [];
	mainAnnouncement: Announcement;
	courses: Course[] = [];
	mapAddressStyles = {
		'padding': '0 6rem'
	}
	maxPrincipleMsgChar = 400;
	maxIntroMsgChar = 400;

	constructor(private apiService: ApiService, 
				private configService: ConfigService) 
	{ }

	ngOnInit(): void {
		this.configService.settings.subscribe(data => {
			this.settings = data;
		});

		this.getAllCourses();
		this.getAllAnnouncements();
	}

	getAllCourses(): void {
		this.apiService.getData('courses').subscribe((resp: GenericApiResponse) => {
			this.courses = resp.data.courses;
		});
	}

	getAllAnnouncements(): void {
		this.apiService.getData('announcements').subscribe((resp: GenericApiResponse) => {
			const data: Announcement[] = resp.data.announcements;
			this.announcements = data.filter(el => el.isMain === false);
			this.mainAnnouncement = data.find(el => el.isMain === true) as Announcement;
		});
	}

	onSeeMore(type: 'principleMsg' | 'introMsg'): void {
		if (type === 'principleMsg') {
			this.maxPrincipleMsgChar = this.settings.principleMessage.length;
		}
		else {
			this.maxIntroMsgChar = this.settings.introduction.length;
		}
	}
}
