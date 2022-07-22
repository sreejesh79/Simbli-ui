import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { OtpPopupComponent } from '../otp-popup/otp-popup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  size: NzButtonSize = 'large';
  validateForm!: FormGroup;
  emailValidation = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  isMobile: boolean = false;

  constructor(private modalService: NzModalService, private fb: FormBuilder) {    
   }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, {validators: [Validators.email,Validators.required, Validators.pattern(this.emailValidation)]}],
      
    });
  }  

  onSubmit(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.showModal();
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  showModal() {    
    this.modalService.create({
      nzContent: OtpPopupComponent,
      nzMaskClosable: false,
      nzClosable: false,
    });
  }

}
