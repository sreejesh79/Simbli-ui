import { Component, OnInit } from '@angular/core';
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
  constructor(private modalService: NzModalService) { }

  ngOnInit(): void {
  }

  showModal() {    
    this.modalService.create({
      nzContent: OtpPopupComponent,
      nzMaskClosable: false,
      nzClosable: false,
    });
  }

}
