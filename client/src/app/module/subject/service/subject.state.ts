import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SubjectStateModel } from '../model/subject-state.model';
import { SubjectModel } from '../model/subject.model';
import { SaveSelectedSubject } from './subject.action';

@State<SubjectStateModel>({
  name: 'subject',
  defaults: {
    subject: undefined,
  },
})
@Injectable()
export class SubjectState {
  @Selector()
  public static getSelectedSubject(state: SubjectStateModel): SubjectModel {
    return state.subject;
  }

  @Action(SaveSelectedSubject)
  public saveSeletedSubject(
    stateContext: StateContext<SubjectStateModel>,
    action: SaveSelectedSubject
  ): void {
      stateContext.setState({subject: action.selectedSubject});
  }
}
