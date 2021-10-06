import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DestroyableService {
  private destroySource = new Subject();

  public ngOnDestroy(): void {
    this.destroySource.next(undefined);
    this.destroySource.complete();
  }

  public get destroy$(): Observable<unknown> {
    return this.destroySource.asObservable();
  }
}
