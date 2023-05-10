import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConcertsUpcomingResponse } from '../../interfaces/concerts-upcoming-response.interface';

@Injectable({
  providedIn: 'root',
})
export class UpcomingConcertsService {
  private readonly upcomingConcertsUrl = 'api/bvkz/upcoming-concerts';

  constructor(private http: HttpClient) {}

  getUpcomingConcertsData(): Observable<readonly ConcertsUpcomingResponse[]> {
    return this.http.get<readonly ConcertsUpcomingResponse[]>(this.upcomingConcertsUrl);
  }
}
