import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/users.interface';
import { UserService } from 'src/app/core/services/users/customer/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})

export class UserDashboardComponent implements OnInit {
  // showModal = false;
  userForm: FormGroup;
  date = new Date();

  constructor(private fb: FormBuilder, 
    private userService: UserService, 
    private router: Router,
    private toast: ToastrService) { 
    
    this.userForm = this.fb.group({
      id: [''],
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      status: [true],
      role: [''],
      dob: ['', [Validators.required]],
      loi: this.fb.array([], [Validators.required]),
      address: this.fb.group({
        street: ['', [Validators.required]],
        brgy: ['', [Validators.required]],
        city: ['', [Validators.required]],
        province: ['', [Validators.required]],
      })
    })
  }

  ngOnInit(): void {
    this.userService.getUserCredential().subscribe((x: any) => {
      this.userForm.patchValue(x)
    })
  }

  //  previewImage(e: any) {
  //   if(e.target.files) {
  //      const reader = new FileReader();
  //      reader.readAsDataURL(e.target.files[0]);
  //      reader.onload = (e: any) => {
  //      }
  //     this.userForm.get('user-profile')?.patchValue(e.target.files[0].name)
  //   }
  //  }

   save = () => {
    const userData = this.userForm.getRawValue() as User
    this.userService.updateUserInfo(userData).subscribe( x => {
      if(!x.error){
        this.toast.success("Successfully Saved");
      }
    })
   }

}
