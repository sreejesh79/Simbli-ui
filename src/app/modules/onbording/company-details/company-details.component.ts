import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  size: NzButtonSize = 'large';
  isFetch: boolean = false;
  expandSet = new Set<number>();

  listOfData = [
    {     
      number: '30AADCL9014D1Z3',
      address: '26/3, Mauling Wada, Azossim, Neura Goa 403104'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  fetch() {
    this.isFetch = true;
  }
}
