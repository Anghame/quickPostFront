import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../../core/services/auth.service'
import { ToasterService } from '../../../../shared/services/toaster.service';
import { ConfirmPasswordValidator } from '../../../core/validators/ConfirmPasswordValidator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  showPassword = false;
  showPassword_V =false
  registerForm: FormGroup;
  loadingButton = false;
  invalidPatternColorAfterCheck: boolean = false;
  validatedPatternsChild: string;
  isPasswordRobust: boolean;
  validatedPatternsParent: number = 0;
  username: any;

  @ViewChild('passwd') password: ElementRef;
  @ViewChild('cpasswd') passwordConfirmation: ElementRef;
  @Output()
  year = new Date().getFullYear();
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toasterService: ToasterService,
    private authService :AuthService


  ) {}
  ngOnInit(): void {
    this.initForm();
}

private initForm(): void {
    this.registerForm = this.fb.group(
        {
            email: [
                '',
                [Validators.required, Validators.email, Validators.maxLength(320)],
            ],
            firstName: [
                '',
                [Validators.required, Validators.maxLength(50)],
            ],
            lastName: [
                '',
                [Validators.required, Validators.maxLength(50)],
            ],
            password: [
                '',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(68),
                    Validators.pattern(/^(?=.*\d)(?=.*[a-z]).{8,68}$/),
                ]),
            ],
            cPassword: [
                null,
                Validators.compose([
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(68),
                ]),
            ],
            gender: [
                '',
                [Validators.required],
            ],
            dateOfBirth: [
                '',
                [Validators.required],
            ],
        },
        {
            validator: ConfirmPasswordValidator.MatchPassword,
        }
    );
}

submit(): void {
    this.loadingButton = true;

    const email = this.registerForm.get('email')?.value;
    const password = this.registerForm.get('password')?.value;
    const firstName = this.registerForm.get('firstName')?.value;
    const lastName = this.registerForm.get('lastName')?.value;
    const username = firstName + lastName;
    const gender = this.registerForm.get('gender')?.value;
    const dateOfBirth = this.registerForm.get('dateOfBirth')?.value;

    this.authService.register(email,username, password, firstName, lastName, gender, dateOfBirth).subscribe({
        next: (response) => {
            this.toasterService.showToast('Inscription réussie !', 'success');
            this.router.navigate(['/auth/login']); 
            this.loadingButton = false;
        },
        error: (err) => {
            this.loadingButton = false;
            this.toasterService.showToast('Une erreur est survenue lors de l\'inscription.', 'error');
        },
    });
}

isControlValid(controlName: string): boolean {
    const control = this.registerForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
}

isControlInvalid(controlName: string): boolean {
    const control = this.registerForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
}

isControlTouched(controlName: string): boolean {
    const control = this.registerForm.controls[controlName];
    return control.dirty || control.touched;
}

passwordRobustnessHandler(isRobust: boolean): void {
    this.isPasswordRobust = isRobust;
    this.invalidPatternColorAfterCheck = false;
}

onValidatedPatternsOutput(validatedPatterns): void {
    this.validatedPatternsParent = validatedPatterns.length;
    this.validatedPatternsChild = validatedPatterns;
}
}