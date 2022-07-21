import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	academyName: string;
	logo: string;
	showMobileMenu: boolean = false;

	constructor(private configService: ConfigService) {}

	ngOnInit(): void {
		this.configService.settings.subscribe(data => {
			this.academyName = data.academyName;
			this.logo = data.logo;
		});
	}

	toggleMenu(ev: MouseEvent): void {
		ev.stopPropagation();
		
		this.showMobileMenu = !this.showMobileMenu;
	}
}
