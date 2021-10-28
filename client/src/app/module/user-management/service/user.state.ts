import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { UserStateModel } from '../model/user.state.model';
import { SaveSelectedUser, SaveUsers } from './user.action';

@State<UserStateModel>({
  name: 'user',
  defaults: {
    students: [],
    teachers: [],
    selectedUser: undefined,
  },
})
@Injectable()
export class UserState {
  @Selector()
  public static selectedUser(state: UserStateModel) {
    return state.selectedUser;
  }

  @Selector()
  public static getStudents(state: UserStateModel) {
    return state.students;
  }

  @Selector()
  public static getTeachers(state: UserStateModel) {
      return state.teachers
  }

  @Action(SaveSelectedUser)
  public saveSeletedUser(
    stateContext: StateContext<UserStateModel>,
    action: SaveSelectedUser
  ): void {
    stateContext.patchState({ selectedUser: action.selectedUser });
  }

  @Action(SaveUsers)
  public saveInitUser(
    stateContext: StateContext<UserStateModel>,
    action: SaveUsers
  ): void {
    const students = action.users.filter(student=>student.role === 'ROLE_STUDENT');
    const teachers = action.users.filter(teacher=>teacher.role === 'ROLE_TEACHER');
    stateContext.patchState({ students: students, teachers: teachers });
  }
}
