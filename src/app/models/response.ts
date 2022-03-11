export interface GenericApiResponse {
	status: 'success' | 'fail' | 'error';
	records: number;
	data: any;
	message: string;
}