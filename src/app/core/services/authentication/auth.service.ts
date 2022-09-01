import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { UserAuthentication } from 'src/app/components/auth-components/auth-model/auth-interface';
import { environment } from 'src/environments/environment.prod';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router, private toast: ToastrService ) { }

  getToken(){
    return localStorage.getItem("token")? true: false;
  }
  
  register = (userData: UserAuthentication) => {
    return this.http.post(`${environment.url}/signup`, userData).pipe(
      catchError(err => {
        this.toast.error(err.error)
        return of(err)
      }),
      tap((x: any) => {
        if(x.accessToken) {
          this.router.navigate(['auth/signin'])
        }
      })
    )
  }

  login = (userData: UserAuthentication) => {
    return this.http.post(`${environment.url}/signin`, userData)
    .pipe(
      catchError(err => {
        console.log(err)
        this.toast.error(err.error)
        return of(err)
      }),
      tap(x => x)
    )
  }

  forgotpassword = (userData: any) => {
    return this.http.post(`${environment.url}/forgotpass-form`, userData)
    .pipe(
      catchError(err => {
        console.log(err)
        this.toast.error(err.error)
        return of(err)
      }),
      tap(x => x)

    )
  }

}
