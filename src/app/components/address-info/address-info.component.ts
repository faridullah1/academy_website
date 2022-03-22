import { Component, Input, OnInit } from '@angular/core';
import { SystemSetting } from 'src/app/models/general';

declare var mapboxgl: any;

@Component({
  selector: 'address-info',
  templateUrl: './address-info.component.html',
  styleUrls: ['./address-info.component.scss']
})
export class AddressInfoComponent implements OnInit {
	@Input() settings: SystemSetting;
	@Input() styles: any;

	constructor() { }

	ngOnInit(): void {
		this.drawMap();
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
