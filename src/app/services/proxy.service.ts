import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError} from 'rxjs/operators';

export const api = "https://api.spotify.com/v1/"
@Injectable({
  providedIn: 'root'
})

export class ProxyService {
  private _token: string = '';
  constructor(public httpClient: HttpClient,private actRoute:ActivatedRoute) { 
   if(localStorage.getItem('isAuthenticated') == "false" || localStorage.getItem('isAuthenticated') == null){
    this.actRoute.fragment.subscribe( x => {
      this._token = x.split('=')[1];
      localStorage.setItem('accesstoken',this._token);
      localStorage.setItem('isAuthenticated',"true")
     })
   }
  
  }
  getHeaders(): HttpHeaders {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' +  localStorage.getItem('accesstoken')
    })

    return headers;
  }

  get(url: string): Observable<any> {
    return this.httpClient.get(url, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    localStorage.clear();
    location.assign('/');
    return throwError(
      'Something bad happened; please try again later.');
  };
}
