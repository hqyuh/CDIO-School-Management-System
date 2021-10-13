import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { QuizzStateModel } from "../model/quizz-state.model";
import { SaveSelectedQuizz } from "./quizz.action";

@State<QuizzStateModel>({
    name: 'quizz',
    defaults: {
      quizzes: undefined,
    },
  })
  @Injectable()
  export class QuizzState {
      @Selector()
      public static selectedQuizz(state: QuizzStateModel){
          return state.quizzes;
      }

      @Action(SaveSelectedQuizz)
      public saveSeletedQuizz(
        stateContext: StateContext<QuizzStateModel>,
        action: SaveSelectedQuizz
      ): void {
          stateContext.setState({quizzes: action.selectedQuizz});
      }
  }