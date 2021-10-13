import { QuizzModel } from "../model/quizz.model";

export class SaveSelectedQuizz {
    public static readonly type = '[Quizz] Store selected quizz';

    constructor(public selectedQuizz: QuizzModel){}
}