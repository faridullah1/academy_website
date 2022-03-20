import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SystemSetting } from '../models/general';
import { GenericApiResponse } from '../models/response';
import { ApiService } from './api.service';


@Injectable({providedIn: 'root'})
export class ConfigService {
	settings = new Subject<SystemSetting>();

	constructor(private apiService: ApiService) {
		this.getSystemSettings();
	}
	
	private getSystemSettings(): void {
		this.apiService.getData('system_settings').subscribe((resp: GenericApiResponse) => {
			this.settings.next(resp.data.systemSettings);
		});
	}
}