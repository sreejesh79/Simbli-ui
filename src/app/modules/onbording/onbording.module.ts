import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnbordingRoutingModule } from './onbording-routing.module';
import { OnbordingComponent } from './onbording.component';
import { LoginComponent } from './login/login.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { OtpPopupComponent } from './otp-popup/otp-popup.component';

@NgModule({
  declarations: [
    OnbordingComponent,
    LoginComponent,
    OtpPopupComponent
  ],
  imports: [
    CommonModule,
    OnbordingRoutingModule,
    NgZorroAntdModule
  ]
})
export class OnbordingModule { }
