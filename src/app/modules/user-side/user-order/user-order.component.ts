import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.scss']
})
export class UserOrderComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }


   shopAgain() {
    this.router.navigate(['layout-pages/products']);
  }

}
