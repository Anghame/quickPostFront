import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternVerificatorComponent } from './pattern-verificator.component';

describe('PatternVerificatorComponent', () => {
  let component: PatternVerificatorComponent;
  let fixture: ComponentFixture<PatternVerificatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatternVerificatorComponent]
    });
    fixture = TestBed.createComponent(PatternVerificatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
