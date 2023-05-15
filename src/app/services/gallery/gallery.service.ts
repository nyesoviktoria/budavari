import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ROUTE } from '../../constants/app.constants';
import { Observable } from 'rxjs';
import { GalleryResponse } from '../../interfaces/gallery-response.interface';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private readonly galleryUrl = API_ROUTE + 'gallery';

  constructor(private readonly http: HttpClient) {}

  getGalleryData(): Observable<readonly GalleryResponse[]> {
    return this.http.get<readonly GalleryResponse[]>(this.galleryUrl);
  }
}
