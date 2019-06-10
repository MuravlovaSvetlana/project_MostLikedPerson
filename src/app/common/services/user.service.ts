import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { GlobalAuthService } from './global-auth.service';
import { CurrentUserStoreService } from './current-user-store.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private globalAuth: GlobalAuthService,
    private currentUser: CurrentUserStoreService,
  ) { }

  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/public/users/get-info/${id}`).pipe(
      map((user: any) => {
        if (user._id === this.globalAuth.userId) {
          this.currentUser.info = user;
        }
        return user;
      })
    );
  }

  uploadCover(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('coverImg', file);
    const id = this.globalAuth.userId;
    return this.http.post(`${this.apiUrl}/public/users/upload-cover/${id}`, formData);
  }

  uploadSelfies(id: string): Observable<object> {
    return this.http.get(`${this.apiUrl}/public/users/my-images/${id}`);
  }

  uploadPhotos(files: any[]): Observable<object> {
    const formData = new FormData();
    files.forEach((file) => formData.append('userPhotos', file));
    const id = this.globalAuth.userId;    
    return this.http.post(`${this.apiUrl}/public/users/upload-photos/${id}`, formData);
  }

  uploadFavourities(id: string): Observable<object> {
    let params = new HttpParams();
    params = params.append('part', '1')
      .append('limit', '10');
    const httpOptions = {
      params
    };
    return this.http.get(`${this.apiUrl}/public/users/my-favorites/${id}`, httpOptions);
  }

  uploadFollowers(id: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('part', '1')
      .append('limit', '25')
      .append('path', 'followings');
    const httpOptions = {
      params
    };
    return this.http.get(`${this.apiUrl}/public/users/my-followers-followings/${id}`, httpOptions);
  }

  uploadFollowings(id: string): Observable<object> {
    let params = new HttpParams();
    params = params.append('part', '1')
      .append('limit', '25')
      .append('path', 'followers');
    const httpOptions = {
      params
    };
    return this.http.get(`${this.apiUrl}/public/users/my-followers-followings/${id}`, httpOptions);
  }

  followUser (id: string): Observable<object>  {
    return this.http.put(`${this.apiUrl}/public/users/following/${id}`, {});
  }
}