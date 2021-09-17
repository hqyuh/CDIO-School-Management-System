import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, throwError} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  public login(credential: any): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/auth/login', {
      email: "hoquanghuy0123@gmail.com", password: "1q2w3e456789" });
  }
}
