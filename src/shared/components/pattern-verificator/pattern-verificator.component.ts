
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pattern-verificator',
  templateUrl: './pattern-verificator.component.html',
  styleUrls: ['./pattern-verificator.component.css'],
})
export class PatternVerificatorComponent implements OnInit {
  @Input() set newPassword(value: string) {
    this.inputNewPassword = value ;
    this.checkPasswordRobustness();
  }
  @Input() invalidPatternColorAfterCheck: boolean = false;

  @Output() passwordRobustness: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  inputNewPassword: string = '';
  hasMinLength: boolean = false;
  hasLowercase: boolean = false;
  hasUppercase: boolean = false;
  hasDigitOrSymbol: boolean = false;

  constructor() {}

  ngOnInit(): void {

    this.checkPasswordRobustness();
  }

  // Function to check the robustness of the password based on set criteria
  private checkPasswordRobustness(): void {
    this.hasMinLength = this.inputNewPassword
      ? this.inputNewPassword.length >= 8
      : false;
    this.hasLowercase = this.inputNewPassword
      ? /[a-z]/.test(this.inputNewPassword)
      : false;
    this.hasUppercase = this.inputNewPassword
      ? /[A-Z]/.test(this.inputNewPassword)
      : false;
    this.hasDigitOrSymbol = this.inputNewPassword
      ? /[0-9!@#$%^&*(),.?":{}|<>]/.test(this.inputNewPassword)
      : false;




    const isRobustPassword =
      this.hasMinLength &&
      this.hasLowercase &&
      this.hasUppercase &&
      this.hasDigitOrSymbol ;
    
    this.invalidPatternColorAfterCheck = false;
    // Emitting the password robustness status
    this.passwordRobustness.emit(isRobustPassword);
  }
}
