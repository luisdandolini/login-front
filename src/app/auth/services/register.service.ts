import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:3000/user';

  constructor(private httpClient: HttpClient) { }

  createUser(userDate: any): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, userDate);
  }
}
