import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { StateReset } from 'ngxs-reset-plugin';
import { ConfirmationService } from 'primeng/api';
import { takeUntil } from 'rxjs/operators';
import { DestroyableService } from 'src/app/core/service/destroyable.service';
import { QuizzService } from '../../service/quizz.service';
import { QuizzState } from '../../service/quizz.state';

@Component({
  selector: 'app-delete-quizz-modal',
  templateUrl: './delete-quizz-modal.component.html',
  styleUrls: ['./delete-quizz-modal.component.scss'],
  providers: [ConfirmationService, DestroyableService],
})
export class DeleteQuizzModalComponent {
  constructor(
    private quizzService: QuizzService,
    private confirmationService: ConfirmationService,
    private store: Store,
    private destroyableService: DestroyableService,
    private toastService: ToastrService
  ) {}

  public confirmDeleteQuizz(): void {
    const selectedQuizzOnStore = this.store.selectSnapshot(
      QuizzState.selectedQuizz
    );
    if (selectedQuizzOnStore !== undefined) {
      this.confirmationService.confirm({
        message: 'Bạn có thật sự muốn xóa bài thi này không?',
        accept: () => {
          this.quizzService
            .deleteQuizz(selectedQuizzOnStore.id)
            .pipe(takeUntil(this.destroyableService.destroy$))
            .subscribe({
              next: () => {
                this.store.dispatch(new StateReset(QuizzState));
                this.toastService.success('Xóa bài thành công');
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
