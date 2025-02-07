import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../../core/services/auth.service'
import { ToasterService } from '../../../../shared/services/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showPassword = false;
  loginForm: FormGroup;
  loadingButton = false;
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
    this.loginForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(320)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(100),
        ],
      ],
      remember: [false],
    });
  }

 

  submit(): void {

    this.loadingButton = true;


     const email= this.loginForm.get('email')?.value
      const password= this.loginForm.get('password')?.value
      
   
    this.authService.login(email, password).subscribe({
      next: (response) => {
        this.toasterService.showToast('Connexion réussie !','success');
        this.router.navigate(['/posts']);
        this.loadingButton = false;
      },
      error: (err) => {
        this.loadingButton = false;
        this.toasterService.showToast('Une erreur est survenue lors de la connexion.', 'error');
      }
    });
 
  }


  isControlValid(controlName: string): boolean {
    const control = this.loginForm.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.loginForm.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  isControlTouched(controlName: string): boolean {
    const control = this.loginForm.controls[controlName];
    return control.dirty || control.touched;
  }
}
