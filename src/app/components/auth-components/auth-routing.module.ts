import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpassFormComponent } from './forgotpass-form/forgotpass-form.component';
import { LoginFormComponent } from './signin/login-form.component';
import { RegisterFormComponent } from './signup/register-form.component';

const ROUTES: Routes = [
  {
    path: "",
    redirectTo: "signin",
    pathMatch: "full",
  },
  {
    path: "signin",
    component: LoginFormComponent
  },
  {
    path: "signup",
    component: RegisterFormComponent
  },
  {
    path: "forgotpass-form",
    component: ForgotpassFormComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
