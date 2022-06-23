export interface Announcement {
	image: string;
	title: string;
	description: string;
	isMain: boolean;
}

export interface Course {
	image: string;
	name: string;
	teacher: string;
}

export interface SystemSetting {
	_id: string;
	academyName: string;
	address: string;
	email: string;
	introduction: string;
	introductionImage: string;
	logo: string;
	mobileNo: string;
	principleImage: string;
	principleMessage: string;
}