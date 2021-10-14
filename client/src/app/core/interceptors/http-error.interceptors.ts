import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
  import { Observable } from 'rxjs';
  import { tap } from 'rxjs/operators';
  
  @Injectable()
  export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router){}
    public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      return next.handle(req).pipe(tap((event: HttpEvent<unknown>) => {
        if (event instanceof HttpResponse) {
          return;
        }
      }, (err: unknown) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            localStorage.removeItem('currentUser');
            void this.router.navigate([`/account/login`]);
          }
        }
      }));
    }
  }
  