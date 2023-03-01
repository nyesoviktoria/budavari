import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ConcertPreviousResponse {
  readonly date: string;
  readonly location: string;
  readonly url: string;
  readonly videoSource: string;
}

@Injectable({
  providedIn: 'root',
})
export class PreviousConcertsService {
  private readonly previousConcertsUrl = 'api/bvkz/previous-concerts';

  constructor(private http: HttpClient) {}

  getPreviousConcertsData(): Observable<readonly ConcertPreviousResponse[]> {
    return this.http.get<readonly ConcertPreviousResponse[]>(this.previousConcertsUrl);
  }
}
