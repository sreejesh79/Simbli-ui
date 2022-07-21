import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzButtonSize } from 'ng-zorro-antd/button';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {
  @Output() submitdata = new EventEmitter();
  size: NzButtonSize = 'large';
  listOfOption = ['Adminstrator', 'Option 1', 'Option 2'];
  listOfSelectedValue: string[] = [];
  validateForm!: FormGroup;
  emailValidation = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  isNotSelected(value: string): boolean {
    return this.listOfSelectedValue.indexOf(value) === -1;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      fname: [null, {validators: [Validators.required]}],
      lname: [null, {validators: [Validators.required]}],
      email: [null, {validators: [Validators.email, Validators.required, Validators.pattern(this.emailValidation)]}],
      mobile: [null, {validators: [Validators.required]}],
      role: [null, {validators: [Validators.required]}]
    });
  }

  onSubmit(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.submitdata.emit(true);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
}
