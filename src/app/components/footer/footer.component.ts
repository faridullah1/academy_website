import { Component } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
	academyName: string;
	currentDate: number;

	constructor(private configService: ConfigService) {
		this.currentDate = Date.now();
	}

	ngOnInit(): void {
		this.configService.settings.subscribe(data => {
			this.academyName = data.academyName;
		});
	}
}
