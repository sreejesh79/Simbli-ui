import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-button-styles',
  templateUrl: './button-styles.component.html',
  styleUrls: ['./button-styles.component.scss']
})
export class ButtonStylesComponent implements OnInit {
  size: NzButtonSize = 'large';
  constructor() { }

  ngOnInit(): void {
  }

}
