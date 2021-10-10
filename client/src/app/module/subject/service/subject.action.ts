import { SubjectModel } from '../model/subject.model';

export class SaveSelectedSubject {
  public static readonly type = '[Subject] Store selected subject';
  constructor(public selectedSubject: SubjectModel) {}
}
