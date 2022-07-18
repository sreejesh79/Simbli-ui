import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-otp-popup',
  templateUrl: './otp-popup.component.html',
  styleUrls: ['./otp-popup.component.scss']
})
export class OtpPopupComponent implements OnInit {
 
  size: NzButtonSize = 'large';
  constructor() { }

  ngOnInit(): void {
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
 
  }

  handleOk(): void {
    console.log('Button ok clicked!');
 
  }

}
