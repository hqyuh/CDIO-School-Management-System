import User from "../../account/models/account.model";

export class SaveSelectedUser {
    public static readonly type = '[User] Store selected user';

    constructor(public selectedUser: User){}
}

export class SaveUsers {
    public static readonly type = '[User] Store users';
    constructor(public users: User[]){}
}