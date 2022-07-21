import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  @Output() submitdata = new EventEmitter();
  size: NzButtonSize = 'large';
  isFetch: boolean = false;
  expandSet = new Set<number>();
  validateForm!: FormGroup;

  listOfData = [
    {     
      number: '30AADCL9014D1Z3',
      address: '26/3, Mauling Wada, Azossim, Neura Goa 403104'
    }
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      pan: [null, {validators: [Validators.required]}],
    });
  }

  fetch() {
    this.isFetch = true;
  }

  onSubmit(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.fetch();
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  continue() {
    this.submitdata.emit(true);
  }
}
