import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SucessPopupComponent } from '../sucess-popup/sucess-popup.component';

@Component({
  selector: 'app-office-details',
  templateUrl: './office-details.component.html',
  styleUrls: ['./office-details.component.scss']
})
export class OfficeDetailsComponent implements OnInit {
  @Output() submitdata = new EventEmitter();
  size: NzButtonSize = 'large';
  
  listOfData = [
    {     
      office: 'Office 1',
      address: '26/3, Mauling Wada, Azossim, Neura Goa 403104'
    }
  ];
  constructor(private modalService: NzModalService) { }

  ngOnInit(): void {
  }

  continue() {
    // this.submitdata.emit(true);
    this.modalService.create({
      nzContent: SucessPopupComponent,
      nzMaskClosable: false,
      nzClosable: false
    });
  }

}
