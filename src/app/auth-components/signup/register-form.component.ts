import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserAuthentication } from '../auth-model/auth-interface';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private toast: ToastrService) {
    this.registerForm = this.fb.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
      email: [''],
      password: ['']
    })
   }

  ngOnInit(): void {
  }

  register = (): any => {
    const userData = this.registerForm.getRawValue() as UserAuthentication
    if(!userData.firstName) {
     return this.toast.error('First Name is required!')
    }
    if(!userData.lastName) {
      return this.toast.error('Last Name is required!')
     }
     if(!userData.email) {
      return this.toast.error('Email is required!')
     }
     if(!userData.username) {
      return this.toast.error('Username is required!')
     }
     if(!userData.password) {
      return this.toast.error('Password is required!')
     }
    this.authService.register(userData).subscribe()
  }
}
