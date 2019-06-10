import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "@env/environment";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WinersService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
   ) { }

   getNews(): Observable<Object> {
    let params = new HttpParams();
    params = params.append('part', '1')
      .append('limit', '15');
    const httpOptions = {
      params
    };
    return this.http.get(`${this.apiUrl}/public/winners`, httpOptions);
   }
}