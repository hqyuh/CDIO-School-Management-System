import { SubjectModel } from '../../subject/model/subject.model';
import { QuestionModel } from './question.model';

export class QuizzModel {
  public id: number;
  public name?: string;
  public dateCreated?: string;
  public testId?: number;
  public subjectId?: number;
  public subject?: SubjectModel;
  public questions?: QuestionModel[] | null;
  public description?: string;
  public examTime?: number;
  public activationCode?: string;
  public isPrivate?: boolean;
}
