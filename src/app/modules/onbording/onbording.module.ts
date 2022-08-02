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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountInfoComponent } from './account-info/account-info.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { OfficeDetailsComponent } from './office-details/office-details.component';
import { SucessPopupComponent } from './sucess-popup/sucess-popup.component';
import { NoDataPopupComponent } from './no-data-popup/no-data-popup.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { AuthFacadeService } from 'src/app/modules/onbording/state/auth/auth.facade.service';
import { AuthService } from 'src/app/modules/onbording/services/auth.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { authReducer } from 'src/app/modules/onbording/state/auth/auth.reducers';
import { AuthEffect } from 'src/app/modules/onbording/state/auth/auth.effects';
import { EmailPopupComponent } from './email-popup/email-popup.component';

@NgModule({
  declarations: [
    OnbordingComponent,
    LoginComponent,
    OtpPopupComponent,
    PersonalDetailsComponent,
    DashboardComponent,
    AccountInfoComponent,
    CompanyDetailsComponent,
    OfficeDetailsComponent,
    SucessPopupComponent,
    NoDataPopupComponent,
    EmailPopupComponent,
  
  ],
  imports: [
    CommonModule,
    OnbordingRoutingModule,
    NgZorroAntdModule,
    NgOtpInputModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('AUTH', authReducer),
    EffectsModule.forFeature([AuthEffect]), 
  ],
  providers: [AuthFacadeService, AuthService]
})
export class OnbordingModule { }
