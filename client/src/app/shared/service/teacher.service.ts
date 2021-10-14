import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TeacherModel } from '../model/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  public getAllTeacher(): Observable<TeacherModel[]>{
    return this.http.get<TeacherModel[]>(`${environment.apiHost}/teacher`);
    // return of([
    //   {
    //     "teacherId": 1,
    //     "name": "James Gosling",
    //     "position": "Professor"
    // },
    // {
    //     "teacherId": 2,
    //     "name": "Guido van Rossum",
    //     "position": "Professor"
    // },
    // {
    //     "teacherId": 3,
    //     "name": "Brendan Eichh",
    //     "position": "Professor"
    // },
    // {
    //     "teacherId": 4,
    //     "name": "Anders Hejlsberg",
    //     "position": "Professor"
    // },
    // {
    //     "teacherId": 5,
    //     "name": "Bjarne Stroustrup",
    //     "position": "Professor"
    // },
    // {
    //     "teacherId": 6,
    //     "name": "Martin Odersky",
    //     "position": "Professor"
    // }
    // ])
  }
}
