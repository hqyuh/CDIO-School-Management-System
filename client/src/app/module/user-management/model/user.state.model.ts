import User from "../../account/models/account.model";

export class UserStateModel {
    public teachers: User[];
    public students: User[];
    public selectedUser: User;
}