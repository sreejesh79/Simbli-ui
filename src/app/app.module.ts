import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsComponent } from './inputs/inputs.component';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { ButtonStylesComponent } from './button-styles/button-styles.component';
import { OtherStylesComponent } from './other-styles/other-styles.component';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    ButtonStylesComponent,
    OtherStylesComponent,
    SelectDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
