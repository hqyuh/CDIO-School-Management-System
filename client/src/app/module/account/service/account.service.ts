import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import User from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  public login(credential: User): Observable<any> {
    return this.http.post<User>(`${environment.apiHost}/auth/login`, 
      credential);
  }

  public register(credential: User): Observable<any> {
    return this.http.post<User>(`${environment.apiHost}/auth/signup`, 
      credential);
  }
}
