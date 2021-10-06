import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import User from '../models/account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {

  private user = new BehaviorSubject<User>({} as User);

  constructor(private http: HttpClient) {}

  public login(credential: User): Observable<any> {
    return this.http
      .post<User>(`${environment.apiHost}/auth/login`, credential)
      .pipe(
        tap(
          (user) =>{localStorage.setItem('currentUser', JSON.stringify(user));
          this.user.next(user);
        }
          )
      );
  }

  public register(credential: User): Observable<User> {
    return this.http.post<User>(
      `${environment.apiHost}/auth/signup`,
      credential
    );
  }

  public logout(): any{
    this.http.delete(`${environment.apiHost}/auth/logout`).pipe(tap(()=>this.user.next({} as User)))
  }

  public currentUser(): Observable<User>{
    return this.user;
  }
}
