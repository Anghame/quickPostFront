import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SharedModule } from '../../shared/shared.module'
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule ,

    FormsModule,
    SharedModule,
  ]
})
export class AuthModule { }
