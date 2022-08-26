import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { CartItem } from 'src/app/models/cart-item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-section',
  templateUrl: './cart-section.component.html',
  styleUrls: ['./cart-section.component.scss']
})
export class CartSectionComponent implements OnInit, OnDestroy {

  private cartSubscription: Subscription | undefined;
  public items: CartItem[] | undefined;
  public total: number = 0;
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
    this.cartSubscription = this.cartService.itemsChanged.subscribe(
      (items: CartItem[]) => {
        this.items = items;
        this.total = this.cartService.getTotal();
      }
    );
  }

  ngOnDestroy() {
    this.cartSubscription?.unsubscribe();
  }

  public onClearCart(event: { preventDefault: () => void; stopPropagation: () => void; }) {
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

}
