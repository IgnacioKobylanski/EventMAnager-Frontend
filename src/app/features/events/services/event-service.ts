import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/Event';
import { environment } from '../../../../environments/environment.local';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
}
}