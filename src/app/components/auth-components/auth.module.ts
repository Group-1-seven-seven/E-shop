import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './signin/login-form.component';
import { RegisterFormComponent } from './signup/register-form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ForgotpassFormComponent } from './forgotpass-form/forgotpass-form.component';
// import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    ForgotpassFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRoutingModule,
    ToastrModule.forRoot(),
  ],
  providers: [FormBuilder],
})

export class AuthModule {}