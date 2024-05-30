import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpBoxComponent } from './lp-box.component';

describe('LpBoxComponent', () => {
  let component: LpBoxComponent;
  let fixture: ComponentFixture<LpBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LpBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LpBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
