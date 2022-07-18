import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-styles',
  templateUrl: './other-styles.component.html',
  styleUrls: ['./other-styles.component.scss']
})
export class OtherStylesComponent implements OnInit {
  isChecked = false;
  checkOptionsOne = [
    { label: 'Label Name' },
    { label: 'Label Name' },
    { label: 'Label Name', checked: true }
  ];
  
  checkOptionsThree = [
    { label: 'Label Name', disabled: true }
  ];

  radioValue = 'A';
  switchValue = false;
  isDisabled = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  log(value: object[]): void {
    console.log(value);
  }

}
