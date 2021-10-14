import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create-subject-modal',
  templateUrl: './create-subject-modal.component.html',
  styleUrls: ['./create-subject-modal.component.scss']
})
export class CreateSubjectModalComponent implements OnInit {
  public createSubjectForm: any;
  constructor(private modal: NgbModal, private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.createSubjectForm = this.formBuilder.group({
      name: ['',Validators.required],
      teacher: ['',Validators.required]
    })
  }
  public openCreateSubjectModal(content: TemplateRef<any>): void{
    this.modal.open(content,{size: 'md'});
  }

  public get Name(): FormControl {
    return this.createSubjectForm.get('name');
  }
}
