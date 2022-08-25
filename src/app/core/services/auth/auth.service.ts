import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ToastrService } from 'ngx-toastr';
import { UserAuthentication } from 'src/app/auth-components/auth-model/auth-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router, private toast: ToastrService ) { }

  register = (userData: UserAuthentication) => {
    return this.http.post(`${environment.url}/register`, userData).pipe(
      catchError(err => {
        this.toast.error(err.error)
        return of(err)
      }),
      tap((x: any) => {
        if(x.accessToken) {
          this.router.navigate(['login'])
        }
      })
    )
  }

  login = (userData: any) => {
    return this.http.post(`${environment.url}/login`, userData)
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
    return this.http.post(`${environment.url}/forgotpasword`, userData)
    .pipe(
      catchError(err => {
        console.log(err)
        this.toast.error(err.error)
        return of(err)
      }),
      tap(x => x)

    )
  }

  getToken(){
    return localStorage.getItem("token")? true: false;
  }
}
