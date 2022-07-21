import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDataPopupComponent } from './no-data-popup.component';

describe('NoDataPopupComponent', () => {
  let component: NoDataPopupComponent;
  let fixture: ComponentFixture<NoDataPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoDataPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDataPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
