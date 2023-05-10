import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConcertsPreviousResponse } from '../../interfaces/concerts-previous-response.interface';

@Injectable({
  providedIn: 'root',
})
export class PreviousConcertsService {
  private readonly previousConcertsUrl = 'api/bvkz/previous-concerts';

  constructor(private http: HttpClient) {}

  getPreviousConcertsData(): Observable<readonly ConcertsPreviousResponse[]> {
    return this.http.get<readonly ConcertsPreviousResponse[]>(this.previousConcertsUrl);
  }
}
