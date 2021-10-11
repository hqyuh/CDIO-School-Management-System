import { AnswerModel } from './answer.model';

export class QuestionModel {
  public id: number;
  public text: number;
  public number: number;
  public answers: AnswerModel[];
}
