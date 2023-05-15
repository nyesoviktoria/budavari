import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConcertsPreviousResponse } from '../../interfaces/concerts-previous-response.interface';
import { ConcertsUpcomingResponse } from '../../interfaces/concerts-upcoming-response.interface';
import { API_ROUTE } from '../../constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class ConcertsService {
  private readonly upcomingConcertsUrl = API_ROUTE + 'upcoming-concerts';
  private readonly previousConcertsUrl = API_ROUTE + 'previous-concerts';

  constructor(private http: HttpClient) {}

  getUpcomingConcertsData(): Observable<readonly ConcertsUpcomingResponse[]> {
    return this.http.get<readonly ConcertsUpcomingResponse[]>(this.upcomingConcertsUrl);
  }

  getPreviousConcertsData(): Observable<readonly ConcertsPreviousResponse[]> {
    return this.http.get<readonly ConcertsPreviousResponse[]>(this.previousConcertsUrl);
  }
}
