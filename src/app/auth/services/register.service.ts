import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user.model';
import { environment } from 'src/environments/environment.develop';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient: HttpClient) { }

  createUser(userData: UserModel): Observable<UserModel> {
    return this.httpClient.post<UserModel>('user', userData);
  }
}
