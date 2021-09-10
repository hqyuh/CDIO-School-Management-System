import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
} from 'ngx-ui-loader';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule.forRoot({ showForeground: true }),
    NgxUiLoaderHttpModule.forRoot({ showForeground: false }),
    ToastrModule.forRoot({
      maxOpened: 5,
      iconClasses: {
        error: 'rounded-4 font-size-20 toast-error',
        info: 'rounded-4 font-size-20 toast-info',
        success: 'rounded-4 font-size-20 toast-success',
        warning: 'rounded-4 font-size-20 toast-warning',
      },
    }),
  ],
  exports: [BrowserAnimationsModule, NgxUiLoaderModule],
})
export class CoreModule {}
