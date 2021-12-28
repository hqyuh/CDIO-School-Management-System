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


  public createSubject(subject: SubjectModel): Observable<SubjectModel>{
    return this.http.post<SubjectModel>(`${environment.apiHost}/subject`,subject);
  }

  public updateSubject(subject: SubjectModel): Observable<SubjectModel>{
    return this.http.put<SubjectModel>(`${environment.apiHost}/subject`,subject);
  }

  public deleteSubject(subjectId: number): Observable<any>{
    return this.http.delete<any>(`${environment.apiHost}/subject/${subjectId}`);
  }

  public getSubjectList(): Observable<SubjectModel[]>{
    return of([
      {
        id: 5,
        name: 'Hệ phân tán',
        teacher: {
          teacherId: 1,
          name: 'huy',
          position: 'Professcor',
        },
        dateCreated: '0',
      },
      {
        id: 7,
        name: 'K7',
        teacher:  {
          teacherId: 2,
          name: 'huy',
          position: 'Professcor',
        },
        dateCreated: '0',
      },
      {
        id: 7,
        name: 'Xạo lz',
        teacher:  {
          teacherId: 3,
          name: 'huy',
          position: 'Professcor',
        },
        dateCreated: '0',
      }
    ])
    // return this.http.get<SubjectModel[]>(`${environment.apiHost}/subject`);
  }
}
