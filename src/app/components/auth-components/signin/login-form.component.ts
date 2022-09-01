import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserAuthentication } from '../auth-model/auth-interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: AuthService, private router: Router) { 
    this.loginForm = this.fb.group({
      email: ['', [Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {}

  signin = (): any => {
    const userData = this.loginForm.getRawValue() as UserAuthentication
    this.userService.login(userData).subscribe(data => {
      if (!data.error){
        localStorage.setItem("user", JSON.stringify(data));
        if(data.user.role === "user") {
          this.router.navigate(['layout-pages'])
        }else if(data.user.role === "admin"){
          this.router.navigate(['admin'])
        }
      }
    })
  }


 
}
