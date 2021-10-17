export class AnswerRequestModel {
  constructor(
    public testQuizzId?: number,
    public questionId?: number,
    public isSelected?: keyof typeof AnswerConstant
  ) {}
}

export enum AnswerConstant {
  'A' = 'A',
  'B' = 'B',
  'C' = 'C',
  'D' = 'D',
}
