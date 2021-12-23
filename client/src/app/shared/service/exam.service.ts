import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizzModel } from 'src/app/module/quizz/model/quizz.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http: HttpClient) { }

  public getExam(code: string): Observable<QuizzModel> {
    return this.http.get<QuizzModel>(`${environment.apiHost}/quizz/code/${code}`);
  }
}
