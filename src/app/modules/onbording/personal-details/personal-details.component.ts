import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  listOfOption = ['Adminstrator', 'Option 1', 'Option 2'];
  listOfSelectedValue: string[] = [];

  isNotSelected(value: string): boolean {
    return this.listOfSelectedValue.indexOf(value) === -1;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
