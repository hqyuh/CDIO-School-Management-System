import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { StateReset } from 'ngxs-reset-plugin';
import { ConfirmationService } from 'primeng/api';
import { takeUntil } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service';
import { SubjectService } from '../../service/subject.service';
import { SubjectState } from '../../service/subject.state';

@Component({
  selector: 'app-delete-subject-modal',
  templateUrl: './delete-subject-modal.component.html',
  styleUrls: ['./delete-subject-modal.component.scss'],
  providers: [ConfirmationService, DestroyableService],
})
export class DeleteSubjectModalComponent implements OnInit {
  constructor(
    private confirmationService: ConfirmationService,
    private store: Store,
    private subjectService: SubjectService,
    private toastService: ToastrService,
    private destroyableService: DestroyableService
  ) {}

  public ngOnInit(): void {}
  public confirmDeleteSubject(): void {
    const selectedSubject = this.store.selectSnapshot(
      SubjectState.getSelectedSubject
    );
    if (selectedSubject !== undefined) {
      this.confirmationService.confirm({
        message: 'Bạn có thật sự muốn xóa môn học này không?',
        accept: () => {
          this.subjectService
            .deleteSubject(selectedSubject.id)
            .pipe(takeUntil(this.destroyableService.destroy$))
            .subscribe({
              next: () => {
                this.store.dispatch(new StateReset(SubjectState));
                this.toastService.success('Xóa môn học thành công');
              },
              error: () => {
                this.toastService.error('Đã có lỗi xảy ra, vui lòng thử lại!');
              },
            });
        },
      });
    } else {
      this.toastService.error('Hãy chọn môn học để xóa!');
    }
  }
}
