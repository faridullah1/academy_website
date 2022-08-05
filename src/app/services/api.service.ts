import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenericApiResponse } from '../models/response';


@Injectable({providedIn: 'root'})
export class ApiService {
	private baseUrl: string = environment.baseURL;
	constructor(private http: HttpClient) { }
	
	getData(slug: string): Observable<GenericApiResponse> {
		return this.http.get<GenericApiResponse>(this.baseUrl + slug).pipe(catchError(this.handleError));
	}

	postData(slug: string, payload: any): Observable<GenericApiResponse> {
		return this.http.post<GenericApiResponse>(this.baseUrl + slug, payload).pipe(catchError(this.handleError));
	}

	private handleError(error: HttpErrorResponse) {
		return throwError(() => new Error(error.message));
	}
}