import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuestionModel } from '../model/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}

  public deleteQuestion(questionId: number): Observable<any> {
    return this.http.delete(`${environment.apiHost}/question/${questionId}`);
  }

  public createQuestion(question: QuestionModel): Observable<QuestionModel> {
    return this.http.post<QuestionModel>(
      `${environment.apiHost}/question`,
      question
    );
  }
}
