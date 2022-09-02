import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, of, tap } from 'rxjs';
import { User } from 'src/app/core/models/users.interface';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userID: string = "";

  constructor(private http: HttpClient, private toast: ToastrService) {
    const userInfo = localStorage.getItem("user")
    if(userInfo){
      this.userID = JSON.parse(JSON.parse(JSON.stringify(userInfo))).user?.id?? JSON.parse(JSON.parse(JSON.stringify(userInfo))).id
    }
   }

  getUserCredential = (data = this.userID): Observable<any> => {
    return this.http.get(`${environment.url}/users/${data}`).pipe(
      tap(x => x)
    )
  }

  updateUserInfo = (data: User) => {
    return this.http.patch(`${environment.url}/users/${data.id?? this.userID}`, data).pipe(
      catchError(error => {
        this.toast.error(error.error)
        return of(error)
      }),
    )
  }
}
