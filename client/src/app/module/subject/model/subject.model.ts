import { TeacherModel } from "src/app/shared/model/teacher.model";

export class SubjectModel {
    public id?: number;
    public name: string;
    public teacher: TeacherModel;
    public dateCreated?: string;
}

