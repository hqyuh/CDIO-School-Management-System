import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AnswerRequestModel } from '../model/answer-request.model';
import { QuizzModel } from '../model/quizz.model';

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  constructor(private http: HttpClient) {}

  public createQuizz(quizz: QuizzModel): Observable<QuizzModel> {
    return this.http.post<QuizzModel>(`${environment.apiHost}/quizz`, quizz);
  }

  public updateQuizz(quizz: QuizzModel): Observable<QuizzModel> {
    return this.http.put<QuizzModel>(`${environment.apiHost}/quizz`, quizz);
  }

  public deleteQuizz(quizzId: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiHost}/quizz/${quizzId}`);
  }

  public storeAnswer(answer: AnswerRequestModel): Observable<any>{
    return this.http.post<AnswerRequestModel>(`${environment.apiHost}/studentAnswer`,answer);
  }

  public getQuizz(subjectId: number): Observable<QuizzModel[]> {
    return of([
      {
        id: 1,
        name: 'bài 1',
        dateCreated: '29-09-2021 09:06:59',
        description: 'ab',
        examTime: 6900,
        questions: [
          {
            id: 1,
            text: 'hỏi gì',
            mark: 2.0,
            answerA: 'A',
            answerB: 'B',
            answerC: 'C',
            answerD: 'D',
            dateCreated: 'f',
          },
          {
            id: 2,
            text: 'hỏi gì 2',
            mark: 2.0,
            answerA: 'A',
            answerB: 'B',
            answerC: 'C',
            answerD: 'D',
            dateCreated: 'f',
          },
        ],
      },
      {
        id: 1,
        name: 'bài 2',
        dateCreated: '29-09-2021 09:06:59',
        description: 'ab',
        examTime: 12345,
        questions: [
          {
            id: 1,
            text: 'hỏi gì',
            mark: 2.0,
            answerA: 'A',
            answerB: 'B',
            answerC: 'C',
            answerD: 'D',
            dateCreated: 'f',
          },
          {
            id: 2,
            text: 'hỏi gì 2',
            mark: 2.0,
            answerA: 'A',
            answerB: 'B',
            answerC: 'C',
            answerD: 'D',
            dateCreated: 'f',
          },
        ],
      },
    ]);
    // return this.http.get<QuizzModel[]>(`${environment.apiHost}/quizz/bySubject/${subjectId}`);
  }
}
