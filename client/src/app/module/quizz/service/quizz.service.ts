import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuizzModel } from '../model/quizz.model';

@Injectable({
  providedIn: 'root',
})
export class QuizzService {
  constructor(private http: HttpClient) {}

  public getQuizz(subjectId: number): Observable<QuizzModel[]> {
    // return of([
    //   {
    //     id: 1,
    //     name: 'bài 1',
    //     dateCreated: '29-09-2021 09:06:59',
    //     description: 'ab',
    //     questions: [
    //       {
    //         id: 1,
    //         text: 'hỏi gì',
    //         mark: 2.0,
    //         answerA: 'A',
    //         answerB: 'B',
    //         answerC: 'C',
    //         answerD: 'D',
    //         dateCreated: 'f',
    //       },
    //       {
    //         id: 2,
    //         text: 'hỏi gì 2',
    //         mark: 2.0,
    //         answerA: 'A',
    //         answerB: 'B',
    //         answerC: 'C',
    //         answerD: 'D',
    //         dateCreated: 'f',
    //       },
    //     ],
    //   },
    //   {
    //     id: 1,
    //     name: 'bài 2',
    //     dateCreated: '29-09-2021 09:06:59',
    //     description: 'ab',
    //     questions: [
    //       {
    //         id: 1,
    //         text: 'hỏi gì',
    //         mark: 2.0,
    //         answerA: 'A',
    //         answerB: 'B',
    //         answerC: 'C',
    //         answerD: 'D',
    //         dateCreated: 'f',
    //       },
    //       {
    //         id: 2,
    //         text: 'hỏi gì 2',
    //         mark: 2.0,
    //         answerA: 'A',
    //         answerB: 'B',
    //         answerC: 'C',
    //         answerD: 'D',
    //         dateCreated: 'f',
    //       },
    //     ],
    //   },
    // ]);
    return this.http.get<QuizzModel[]>(`${environment.apiHost}/api/quizz/bySubject/${subjectId}`);
  }
}
