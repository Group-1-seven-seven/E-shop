import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/authentication/auth.service';
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
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      status: [true],
      contactNo: [],
      role: ["user"]
    })
   }

  ngOnInit(): void {
  }

  signup = (): any => {
    const userData = this.registerForm.getRawValue() as UserAuthentication
    if(userData === null) {
     return this.toast.error('Please fill-out all the required fields.')
    }
    this.authService.register(userData).subscribe()
  }
}
