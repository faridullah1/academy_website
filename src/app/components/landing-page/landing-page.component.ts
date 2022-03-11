import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Annoucements } from 'src/app/models/general';


@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements OnInit {
	annoucements: Annoucements[];

	constructor() {
		this.annoucements = [
			{ title: 'DIT Result Announced', image: '/assets/images/announcement-1.jpg', description: 'Once again excellent result this time.' },
			{ title: 'DIT Result Announced', image: '/assets/images/announcement-2.jpg', description: 'Once again excellent result this time.' },
			{ title: 'DIT Result Announced', image: '/assets/images/announcement-3.jpg', description: 'Once again excellent result this time.' },
			{ title: 'DIT Result Announced', image: '/assets/images/announcement-4.jpg', description: 'Once again excellent result this time.' },
		]
	}

	ngOnInit(): void {
	}

}
