import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeDetailsComponent } from './office-details.component';

describe('OfficeDetailsComponent', () => {
  let component: OfficeDetailsComponent;
  let fixture: ComponentFixture<OfficeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
