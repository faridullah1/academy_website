import { Component, OnInit } from '@angular/core';
import { Annoucements, Course, SystemSetting } from 'src/app/models/general';
import { GenericApiResponse } from 'src/app/models/response';
import { ApiService } from 'src/app/services/api.service';

declare var mapboxgl: any;

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
	settings: SystemSetting;
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
		this.getSystemSettings();
		this.getAllCourses();
		this.drawMap();
	}

	getAllCourses(): void {
		this.apiService.getData('courses').subscribe((resp: GenericApiResponse) => {
			this.courses = resp.data.courses;
		});
	}

	getSystemSettings(): void {
		this.apiService.getData('system_settings').subscribe((resp: GenericApiResponse) => {
			this.settings = resp.data.systemSettings;
		});
	}

	drawMap(): void {
		const academyMapCoordinates = [70.38910605847849, 32.209581501541294]

		mapboxgl.accessToken = 'pk.eyJ1IjoiZmFyaWR1bGxhaDEyMyIsImEiOiJjbDBuZm0zZDcxYzF0M2Vwd2VzZ2NoOXdmIn0.gh1gSCDUF9e7ybfTAwQ48Q';

		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/faridullah123/cl0ng52ba00a515qg7czopaao',
		});

		const bounds = new mapboxgl.LngLatBounds();

		// Create Marker
		const el = document.createElement('div');
		el.className = 'marker';

		// Add Marker
		new mapboxgl.Marker({
			element: el,
			anchor: 'bottom'
		}).setLngLat(academyMapCoordinates).addTo(map);

		// Extend map bounds to include current location
		bounds.extend(academyMapCoordinates, {
			padding: {
				top: 200,
				bottom: 200,
				left: 100,
				right: 100
			}
		});

		map.fitBounds(bounds, {
			maxZoom: 14
		});
	}
}
