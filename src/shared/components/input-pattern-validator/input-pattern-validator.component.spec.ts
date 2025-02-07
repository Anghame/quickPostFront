import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPatternValidatorComponent } from './input-pattern-validator.component';

describe('InputPatternValidatorComponent', () => {
  let component: InputPatternValidatorComponent;
  let fixture: ComponentFixture<InputPatternValidatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputPatternValidatorComponent]
    });
    fixture = TestBed.createComponent(InputPatternValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
