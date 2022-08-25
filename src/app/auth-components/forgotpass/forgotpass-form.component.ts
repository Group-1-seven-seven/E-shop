import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-forgotpass-form',
  templateUrl: './forgotpass-form.component.html',
  styleUrls: ['./forgotpass-form.component.scss']
})
export class ForgotpassFormComponent implements OnInit {
  forgotForm: FormGroup;


  constructor(private fb: FormBuilder, private userService: AuthService, private router: Router) { 
    this.forgotForm = this.fb.group({
      email: ['']
    })
  }

  ngOnInit(): void {
  }

  reset(){

  }

  forgotpassword(){
    
  }
}
