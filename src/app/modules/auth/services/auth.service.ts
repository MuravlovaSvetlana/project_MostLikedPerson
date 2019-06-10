import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoginServerAnswer } from '../interfaces/LoginServerAnswer';
import { ResetPassword, SignUp, Login } from '../interfaces/InformationToServer';

@Injectable()
export class AuthService {
  private apiUrl: string = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) {}

  login(cred: Login): Observable<LoginServerAnswer> {
    return this.http.post<LoginServerAnswer>(`${this.apiUrl}/public/auth/login`, cred).pipe(
      map((res: LoginServerAnswer): LoginServerAnswer => {
        if (!res.error) {
          localStorage.setItem('sn_app_token', res.token);
        }
        return res;
      })
    );
  }

  resetPassword(param: ResetPassword): Observable<LoginServerAnswer> {
    return this.http.post<LoginServerAnswer>(`${this.apiUrl}/public/auth/reset-password`, param).pipe(
      map((res:LoginServerAnswer): LoginServerAnswer => {
        if (res.error) {
          console.log('try again');
        }
        return res;
      })
    );
  }

  signup(param: SignUp): Observable<LoginServerAnswer> {
    return this.http.post<LoginServerAnswer>(`${this.apiUrl}/public/auth/signup`, param).pipe(
      map((res:LoginServerAnswer): LoginServerAnswer => {
        if (res.error) {
          console.log('try again');
        }
        return res;
      })
    );
  }
}
