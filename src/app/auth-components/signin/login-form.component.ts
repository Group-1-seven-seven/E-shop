import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  login(): any {
    const userData = this.loginForm.getRawValue() as UserAuthentication
    this.userService.login(userData).subscribe(x => { console.log(x)
    //   if (!x.error){
    //     localStorage.setItem("token", x.accessToken);
    //     this.router.navigate(['profile'])
    //   }
    // })
    if (!x.error){
      localStorage.setItem("user", JSON.stringify(x));
      if(x.user.role === "user") {
        this.router.navigate(['home'])
      }else if(x.user.role === "admin"){
        this.router.navigate(['admin'])
      }
    }
  })

  }

  goToRegister(){
    this.router.navigate(['register'])
  }
  
  goToResetPassword(){
    this.router.navigate(['forgotpassword'])
  }

}
