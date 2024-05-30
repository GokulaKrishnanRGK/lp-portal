import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpFormFieldComponent } from './lp-form-field.component';

describe('LpFormFieldComponent', () => {
  let component: LpFormFieldComponent;
  let fixture: ComponentFixture<LpFormFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LpFormFieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LpFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
