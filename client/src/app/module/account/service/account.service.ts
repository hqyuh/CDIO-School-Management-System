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
    return this.http.post<any>('/login',credential).pipe(map((res: any)=>throwError(res)))
  }
}
