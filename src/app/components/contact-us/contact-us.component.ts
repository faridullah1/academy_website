import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
	disableBtn = false;
	isQuerySubmitted = false;

	constructor(private configService: ConfigService, private apiService: ApiService) {
		this.theForm = new FormGroup({
			name: new FormControl('', [Validators.required, Validators.minLength(3)]),
			email: new FormControl('', 
				[Validators.required, Validators.minLength(10), Validators.maxLength(255), Validators.email]),
			phone: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
			comments: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(1000)]),
		});
	}

	ngOnInit(): void {
		this.configService.settings.subscribe(data => {
			this.settings = data;
		});
	}

	numericOnly(ev: any): boolean
    {
		const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'];
		if (allowedKeys.includes(ev.key)) return true;

        const letters = /^[0-9]+$/;
        if (ev.key && ev.key.match(letters))
        {
            return (ev.key.match(letters).length > 0);
        }

        return false;
    }

	onSubmit(): void {
		this.disableBtn = true;

		this.apiService.postData('queries', this.theForm.value).subscribe({
			complete: () => {
				this.disableBtn = false;
				this.isQuerySubmitted = true;
				this.theForm.reset();
			},
			error: () => this.disableBtn = false
		});
	}
}
