import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonStylesComponent } from './button-styles.component';

describe('ButtonStylesComponent', () => {
  let component: ButtonStylesComponent;
  let fixture: ComponentFixture<ButtonStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonStylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
