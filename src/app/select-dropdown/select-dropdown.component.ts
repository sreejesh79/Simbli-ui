import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss']
})
export class SelectDropdownComponent implements OnInit {
  listOfOption = ['Option 1', 'Option 2', 'Option 3'];
  listOfSelectedValue: string[] = [];

  isNotSelected(value: string): boolean {
    return this.listOfSelectedValue.indexOf(value) === -1;
  }
  constructor() { }

  ngOnInit(): void {
   
  }

}
