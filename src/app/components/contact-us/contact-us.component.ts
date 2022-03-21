import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SystemSetting } from 'src/app/models/general';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  providers: [ConfigService]
})
export class ContactUsComponent implements OnInit {
	settings: SystemSetting;
	theForm: FormGroup;

	constructor(private configService: ConfigService) {
		this.theForm = new FormGroup({});
	}

	ngOnInit(): void {
		this.configService.settings.subscribe(data => {
			this.settings = data;
		});
	}
}
