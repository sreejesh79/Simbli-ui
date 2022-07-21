import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SucessPopupComponent } from '../sucess-popup/sucess-popup.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  size: NzButtonSize = 'large';
  current = 0;
  index = 'First-content';
  first: boolean = false;
  second: boolean = false;
  third: boolean = false;
  four: boolean = false;
  selectedTab: number = 0;
  id: any;
  
  constructor(private modalService: NzModalService) { }

  ngOnInit(): void {
  }

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  // done(): void {
  //   this.modalService.create({
  //     nzContent: SucessPopupComponent,
  //     nzMaskClosable: false,
  //     nzClosable: false
  //   });
  // }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      case 3: {
        this.index = 'four-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
    console.log(this.current, 'this.current');
    
    if(this.current == 0) {
      this.first = true;
      this.second = false;
      this.third = false;
      this.four = false;
    } else if(this.current == 1) {
      this.second = true;
      this.third = false;
      this.four = false;
      this.first = false;
    } else if(this.current == 2) {
      this.third = true;
      this.second = false;
      this.first = false;
      this.four = false;
      
    } else if(this.current == 3) {
      this.four = true;
      this.second = false;
      this.first = false;
      this.third = false;
    }
  }


}
