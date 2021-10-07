import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectModel } from '../../model/subject.model';
import { SubjectService } from '../../service/subject.service';

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.scss']
})
export class SubjectPageComponent implements OnInit {
  public subjects: Observable<SubjectModel[]>;
  public cols = [
    {
      header: '',
      field: 'selection',
      width: 3
    },
    {
      header: 'ID',
      field: 'id',
      width: 18
    },
    {
      header: 'Tên môn học',
      field: 'name',
    },
    {
      header: 'Giáo viên',
      field: 'teacher',
      width: 30,
    },
    {
      header: 'Ngày tạo',
      field: 'dateCreated'
    }
  ]
  constructor( private subjectService: SubjectService) { }

  ngOnInit(): void {
    console.log('run')
    this.subjects = this.subjectService.getSubjectList()
  }

}
