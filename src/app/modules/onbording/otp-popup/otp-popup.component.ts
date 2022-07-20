import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-otp-popup',
  templateUrl: './otp-popup.component.html',
  styleUrls: ['./otp-popup.component.scss']
})
export class OtpPopupComponent implements OnInit {
  @ViewChild('ngMobileOtpInput') ngMobileOtpInputRef: any;
  size: NzButtonSize = 'large';  

  constructor(private router: Router, private modal: NzModalRef) { 
  }

  config = {
    allowNumbersOnly: true,
    length: 6,
    inputStyles: {
      color: 'rgba(0, 0, 0, 0.3)',
      fontSize:'25px'
    },
  };

  ngOnInit(): void {
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
 
  }

  handleOk(): void {
    console.log('Button ok clicked!');
 
  }

  onMobileOtpChange(otp:any) {
    console.log(otp);
    
  }

  goDashboard() {
    this.modal.destroy();
    this.router.navigateByUrl("onbording/dashboard");
  }

}
