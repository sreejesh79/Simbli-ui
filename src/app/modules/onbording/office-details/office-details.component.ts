import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office-details',
  templateUrl: './office-details.component.html',
  styleUrls: ['./office-details.component.scss']
})
export class OfficeDetailsComponent implements OnInit {
  listOfData = [
    {     
      office: 'Office 1',
      address: '26/3, Mauling Wada, Azossim, Neura Goa 403104'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
