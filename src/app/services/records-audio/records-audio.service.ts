import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecordsAudioResponse } from '../../interfaces/records-audio-response.interface';
import { API_ROUTE } from '../../constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class RecordsAudioService {
  private readonly recordsAudioUrl = API_ROUTE + 'records-audio';

  constructor(private http: HttpClient) {}

  getRecordsAudioData(): Observable<readonly RecordsAudioResponse[]> {
    return this.http.get<readonly RecordsAudioResponse[]>(this.recordsAudioUrl);
  }
}
