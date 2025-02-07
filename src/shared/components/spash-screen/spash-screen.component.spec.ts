import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpashScreenComponent } from './spash-screen.component';

describe('SpashScreenComponent', () => {
  let component: SpashScreenComponent;
  let fixture: ComponentFixture<SpashScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpashScreenComponent]
    });
    fixture = TestBed.createComponent(SpashScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
