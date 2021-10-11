import { SubjectModel } from '../../subject/model/subject.model';
import { QuestionModel } from './question.model';

export class QuizzModel {
  public id: number;
  public name: string;
  public dateCreated: string;
  public testId?: number;
  public subjectId?: number;
  public subject?: SubjectModel;
  public questions?: QuestionModel[];
}