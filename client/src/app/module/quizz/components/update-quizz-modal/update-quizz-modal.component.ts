import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { takeUntil } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service';
import { ConvertTimeService } from 'src/app/shared/service/convert-time.service';
import { QuizzService } from '../../service/quizz.service';
import { QuizzState } from '../../service/quizz.state';

@Component({
  selector: 'app-update-quizz-modal',
  templateUrl: './update-quizz-modal.component.html',
  styleUrls: ['./update-quizz-modal.component.scss'],
  providers: [DestroyableService, ConvertTimeService]
})
export class UpdateQuizzModalComponent implements OnInit {
  public updateQuizzForm: any;
  constructor(    private modal: NgbModal,
    private formBuilder: FormBuilder,
    private destroyableService: DestroyableService,
    private toastService: ToastrService,
    private quizzService: QuizzService,
    private store: Store,
    private convertTimeService: ConvertTimeService) { }

  public ngOnInit(): void {

  }

  public get Name(): FormControl {
    return this.updateQuizzForm.get('name');
  }

  public get Description(): FormControl {
    return this.updateQuizzForm.get('description');
  }
  public get examTime(): FormControl {
    return this.updateQuizzForm.get('examTime');
  }

  public openUpdateQuizzModal(content: TemplateRef<any>): void{
    const selectedQuizzOnStore = this.store.selectSnapshot(QuizzState.selectedQuizz);
    if(selectedQuizzOnStore === undefined){
      this.toastService.error('Vui lòng chọn bài thi để cập nhật!');
    } else {
      this.modal.open(content, {size: 'md'});
      const { name, description, examTime } = selectedQuizzOnStore;
      const examTimeInit = this.convertTimeService.convertSecondsToTimer(examTime);
      console.log(examTimeInit);
      this.updateQuizzForm = this.formBuilder.group({
        name: [name, Validators.required],
        description: [description, Validators.required],
        examTime: [examTimeInit, Validators.required],
      });
    }
  }

  public updateQuizz(): void{
    if(this.updateQuizzForm.valid){
      this.quizzService.updateQuizz(this.updateQuizzForm.value).pipe(takeUntil(this.destroyableService.destroy$)).subscribe({
        next: ()=> this.toastService.success('Bài thi đã được cập nhật dưới nền. Hãy quay lại trong ít phút!;'),
        error: ()=> this.toastService.error('Cập nhật bài thi thất bại!')
      })
    }
  }

}
