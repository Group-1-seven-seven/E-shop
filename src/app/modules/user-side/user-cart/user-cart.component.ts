import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

  private cartSubscription: Subscription | undefined;
  public items: CartItem[] | undefined;
  public total: number = 0;
  // public products : any = [];
  // public subTotal !: number;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
    this.cartSubscription = this.cartService.itemsChanged.subscribe(
      (items: CartItem[]) => {
        this.items = items;
        this.total = this.cartService.getTotal();
      }
    );
    // this.cartService.getProducts().subscribe( res => {
    //   this.products = res;
    //   this.subTotal = this.cartService.getTotalPrice();
    //  })
  }

  ngOnDestroy() {
    this.cartSubscription?.unsubscribe();
  }
  
  public onResetCart(event: { preventDefault: () => void; stopPropagation: () => void; }) {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.clearCart();
  }

  public onRemoveItem(event: { preventDefault: () => void; stopPropagation: () => void; }, item: CartItem) {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.removeItem(item);
  }

  public increaseAmount(item: CartItem) {
    this.cartService.updateItemAmount(item, item.amount + 1);
  }

  public decreaseAmount(item: CartItem) {
    const newAmount = item.amount === 1 ? 1 : item.amount - 1;
    this.cartService.updateItemAmount(item, newAmount);
  }

  public onClearCart(event: { preventDefault: () => void; stopPropagation: () => void; }) {
    event.preventDefault();
    event.stopPropagation();
    this.cartService.clearCart();
  }

  // removeItem(item : any){
  //   this.cartService.removeCartItem(item);
  // }
  
  // emptyCart(){
  //   this.cartService.removeAll();
  // }

  // goToProducts(){
  //   this.router.navigate(['/products'])
  // }

  // goToCheckout(){
  //   this.router.navigate(['user/checkout'])
  // }

}
