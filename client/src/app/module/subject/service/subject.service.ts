import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SubjectModel } from '../model/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  public getSubjectList(): Observable<SubjectModel[]>{
    return of([
      {
        id: 5,
        name: 'Hệ phân tán',
        teacher: {
          teacherId: 4,
          name: 'huy',
          position: 'Professcor',
        },
        dateCreated: '0',
      },
      {
        id: 7,
        name: 'K7',
        teacher:  {
          teacherId: 4,
          name: 'huy',
          position: 'Professcor',
        },
        dateCreated: '0',
      },
      {
        id: 7,
        name: 'Xạo lz',
        teacher:  {
          teacherId: 4,
          name: 'huy',
          position: 'Professcor',
        },
        dateCreated: '0',
      }
    ])
    // return this.http.get<SubjectModel[]>(`${environment.apiHost}/subject`);
  }
}
