import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { IAuthRes, ILogin } from '../models/auth.model';
import { environment } from 'src/environments/environment.develop';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private http: HttpClient, 
    private router: Router
  ) {}

  login(login: ILogin): Observable<IAuthRes> {
    return this.http.post<IAuthRes>( 'login',  login).pipe(
      tap((res) => {
        localStorage.setItem('authToken', res.access_token);
      })
    );
  }  

  logout(path: string) {
    localStorage.removeItem('authToken');
    this.router.navigate([path]);
  }
}
