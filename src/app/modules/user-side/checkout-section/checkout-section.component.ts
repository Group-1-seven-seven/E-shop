import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-checkout-section',
  templateUrl: './checkout-section.component.html',
  styleUrls: ['./checkout-section.component.scss']
})
export class CheckoutSectionComponent implements OnInit {

  items: CartItem[] | undefined;
  total: number | undefined;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }

   placeOrder() {
    alert("Order has been placed!")
    this.router.navigate(['user/order-section']);
  }

   goToCart() {
    this.router.navigate(['user/user-cart']);
  }


}
