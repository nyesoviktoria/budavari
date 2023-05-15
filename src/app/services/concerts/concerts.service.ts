import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConcertsPreviousResponse } from '../../interfaces/concerts-previous-response.interface';
import { ConcertsUpcomingResponse } from '../../interfaces/concerts-upcoming-response.interface';

@Injectable({
  providedIn: 'root',
})
export class concertsService {
  private readonly upcomingConcertsUrl = 'api/bvkz/upcoming-concerts';
  private readonly previousConcertsUrl = 'api/bvkz/previous-concerts';

  constructor(private http: HttpClient) {}

  getUpcomingConcertsData(): Observable<readonly ConcertsUpcomingResponse[]> {
    return this.http.get<readonly ConcertsUpcomingResponse[]>(this.upcomingConcertsUrl);
  }

  getPreviousConcertsData(): Observable<readonly ConcertsPreviousResponse[]> {
    return this.http.get<readonly ConcertsPreviousResponse[]>(this.previousConcertsUrl);
  }
}
