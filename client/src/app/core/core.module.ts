import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxsModule } from '@ngxs/store';
import { ToastrModule } from 'ngx-toastr';
import {
  NgxUiLoaderHttpModule,
  NgxUiLoaderModule,
  NgxUiLoaderRouterModule,
} from 'ngx-ui-loader';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxsModule.forRoot([], { developmentMode: false }),
    NgxUiLoaderRouterModule.forRoot({ showForeground: true }),
    NgxUiLoaderHttpModule.forRoot({ showForeground: false }),
    NgbModule,
    NgxsResetPluginModule,
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
  exports: [
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    ToastrModule,
    HttpClientModule,
  ],
  providers: [httpInterceptorProviders],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. Import Core module in the AppModule only.`
      );
    }
  }
}
