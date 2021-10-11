import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { QuizzModel } from '../model/quizz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor() { }

  public getQuizz(subjectId: number): Observable<QuizzModel[]> {
    return of([
      {
        id: 3,
        subjectId: 6,
        name: 'Giữa kì',
        dateCreated: 'a',
        testId: 3
      }
    ])
  }
}
