import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherStylesComponent } from './other-styles.component';

describe('OtherStylesComponent', () => {
  let component: OtherStylesComponent;
  let fixture: ComponentFixture<OtherStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherStylesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
