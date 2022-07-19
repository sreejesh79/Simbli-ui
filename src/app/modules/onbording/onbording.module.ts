import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnbordingRoutingModule } from './onbording-routing.module';
import { OnbordingComponent } from './onbording.component';
import { LoginComponent } from './login/login.component';
import { NgZorroAntdModule } from 'src/app/ng-zorro-antd.module';
import { OtpPopupComponent } from './otp-popup/otp-popup.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OnbordingComponent,
    LoginComponent,
    OtpPopupComponent,
    PersonalDetailsComponent,
    DashboardComponent,
  
  ],
  imports: [
    CommonModule,
    OnbordingRoutingModule,
    NgZorroAntdModule,
    NgOtpInputModule,
 
    FormsModule  
  ]
})
export class OnbordingModule { }
