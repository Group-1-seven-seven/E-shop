import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserAuthentication } from '../auth-model/auth-interface';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: AuthService, private router: Router, 
    private http : HttpClient, private toast: ToastrService) 
    { 
    this.loginForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  login () : any {
  //   this.http.get<any>("http://localhost:3000/post")
  //   .subscribe(res => {
  //     const user = res.find((a : any) => {
        
  //       return a.email === this.loginForm.value.email &&
  //       a.password === this.loginForm.value.password
  //     });
      
  //     if(user){
  //       this.loginForm.reset();
  //       this.router.navigate(['product-list'])
  //     }else{
  //       this.toast.error("User not found!")
  //     }
  //   }, err=>{
  //     this.toast.error("Something went wrong!")
  //   })
  // }

    const userData = this.loginForm.getRawValue() as UserAuthentication
    this.userService.login(userData).subscribe(x => { 

      if (!x.error){
        localStorage.setItem("token", x.accessToken);
        this.router.navigate(['home'])
      }
    })

  //   if (!x.error){
  //     localStorage.setItem("user", JSON.stringify(x));
  //     if(x.user.role === "user") {
  //       this.router.navigate(['home'])
  //     }else if(x.user.role === "admin"){
  //       this.router.navigate(['admin'])
  //     }
  //   }
  // })

  }

  toRegister(){
    this.router.navigate(['register'])
  }
  
  forgotPassword(){
    this.router.navigate(['forgotpass-form'])
  }

  hide = true
  unhide = false

}
