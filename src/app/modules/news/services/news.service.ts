import { Injectable } from '@angular/core';
import { environment } from "@env/environment";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient,
  ) {}

  getNews(step = '1'): Observable<Object> {
    let params = new HttpParams();
    params = params.append('page', step)
      .append('count', '10');
    const httpOptions = {
      params
    };
    return this.http.get(`${this.apiUrl}/public/news`, httpOptions);
  }
}
