export interface Announcement {
	image: string;
	title: string;
	description: string;
	isMain: boolean;
}

export interface Course {
	_id: string;
	name: string;
	image: string;
	price: number;

	description: string;
	teacher: CourseTeacher;
	outline: string[];
	audience: string;
}

export interface CourseTeacher {
	fullName: string;
	photo: string;
	profileSummary: string;
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