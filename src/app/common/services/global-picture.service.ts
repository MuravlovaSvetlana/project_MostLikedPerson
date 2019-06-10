import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "@env/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalPictureService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }
  
  getPictureInfo(id: string): Observable<object> {
    return this.http.get(`${this.apiUrl}/public/users/image-info/${id}`);
  }
}
