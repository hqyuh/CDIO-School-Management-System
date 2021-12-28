import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import User from '../models/account.model';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  public currentUser: Observable<any>;
  private currentUser$: BehaviorSubject<User>;
  constructor(private http: HttpClient, private router: Router) {
    this.currentUser$ = new BehaviorSubject(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUser$.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUser$.value;
  }

  public login(credential: User): Observable<any> {
    return this.http
      .post<User>(`${environment.apiHost}/auth/login`, credential)
      .pipe(
        tap((user) => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUser$.next(user);
        })
      );
  }

  public register(credential: User): Observable<any> {
    return this.http.post<User>(
      `${environment.apiHost}/auth/signup`,
      credential
    );
  }

  public logout(): Observable<any> {
   return this.http.delete(`${environment.apiHost}/auth/logout`).pipe(
      tap(() => {
        localStorage.removeItem('currentUser');
        this.currentUser$.next(null);
      })
    );
  }

  public forgetPassword(payload: { newPassword: string}): Observable<any> {
    return this.http.patch<any>(`${environment.apiHost}/auth/forgetPassword`, payload);
  }

  public getUserInfo(): Observable<User> {
    return this.http.get<User>(`${environment.apiHost}/user/me`);
  }

  public updateInfo(user: User): Observable<User> {
    return this.http.patch<User>(`${environment.apiHost}/user/me`,user);
  }
}
