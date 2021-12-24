import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import User from 'src/app/module/account/models/account.model';
import { SaveUsers } from 'src/app/module/user-management/service/user.action';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private store: Store) { }

  public getAllUser(): Observable<User[]> {
    // return of([
    //   {
    //       "userId": 1,
    //       "username": "quanghuy",
    //       "email": "hoquanghuy0123@gmail.com",
    //       "fullName": "Ho Quang Huy",
    //       "password": "$2a$10$w7j/qlV9a08nX0jFod1WkO1KCl.O.k9XxneqqD7VfuvhZN.MCBzoi",
    //       "created": "14-10-2021 01:24:47",
    //       "enabled": false,
    //       "role": "ROLE_TEACHER"
    //   },
    //   {
    //       "userId": 2,
    //       "username": "hoquanghuy",
    //       "email": "hoquang.huyy@gmail.com",
    //       "fullName": null,
    //       "password": "$2a$10$Di9HvRTAuEPNMViWtvw9a.NIHR1WitikYUpaR0Qpqd3Z2b2EJo7eC",
    //       "created": "17-10-2021 10:59:52",
    //       "enabled": false,
    //       "role": "ROLE_ADMIN"
    //   },
    //   {
    //       "userId": 5,
    //       "username": "summer",
    //       "email": "nguyennhanly87@gmail.com",
    //       "fullName": "Summer Time",
    //       "password": "$2a$10$4eqPxw/x9Qhbn8sDiLxPgO4nlU8f9vE6kNUodwS.Q5cMRxyuPbzqu",
    //       "created": "26-10-2021 10:34:17",
    //       "enabled": true,
    //       "role": "ROLE_STUDENT"
    //   }
  // ]).pipe(tap(users=>{
  //   this.store.dispatch(new SaveUsers(users));
  // }));

    return this.http.get<User[]>(`${environment.apiHost}/user`).pipe(tap(users=>{
    this.store.dispatch(new SaveUsers(users));
  }))
  }

  public deleteUser(userId: number): Observable<any>{
    return this.http.delete(`${environment.apiHost}/user/${userId}`);
  }

  public updateUser(payload: any): Observable<any> {
    return this.http.patch(`${environment.apiHost}/user`,payload);
  }

  public createUser(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiHost}/user`,user);
  }

  public lockUser(userId: number, status: boolean): Observable<any> {
    return this.http.get(`${environment.apiHost}/user/${userId}/enabled/${status}`)
  }

  public getCurrentUser(): Observable<User> {
    return this.http.get<User>(`${environment.apiHost}/user/me`);
  }
}
