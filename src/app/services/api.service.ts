import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { GenericApiResponse } from '../models/response';


@Injectable({providedIn: 'root'})
export class ApiService {
	private baseUrl: string = 'https://admin-nac-academy.herokuapp.com/api/v1/';
	constructor(private http: HttpClient) { }
	
	getData(slug: string): Observable<GenericApiResponse> {
		return this.http.get<GenericApiResponse>(this.baseUrl + slug).pipe(catchError(this.handleError));
	}

	private handleError(error: HttpErrorResponse) {
		return throwError(() => new Error(error.message));
	}
}