import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DateTimeService {
  private apiUrl = 'https://timeapi.io/api/time/current/zone/';
  timezone = 'Europe/Berlin'

  constructor(private http: HttpClient) {}

  getCurrentDateTime(): Observable<any> {
    const url = this.apiUrl + '?timezone=' +encodeURIComponent(this.timezone);
    return this.http.get(url);
  }
}
