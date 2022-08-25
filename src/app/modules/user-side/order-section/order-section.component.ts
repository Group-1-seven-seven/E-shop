import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-section',
  templateUrl: './order-section.component.html',
  styleUrls: ['./order-section.component.scss']
})
export class OrderSectionComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }


   goToHome() {
    this.router.navigate(['home']);
  }

}
