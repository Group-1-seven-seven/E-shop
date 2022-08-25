import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from 'src/app/models/cart-item';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  // private cartItems: CartItem[];
  // public itemsChanged: EventEmitter<CartItem[]> = new EventEmitter<CartItem[]>();
  public cartItemList : any = []
  public productList = new BehaviorSubject<any>([])
  public search = new BehaviorSubject<string>("");


  constructor() { 
    // this.cartItems = []
  }

  // public getItem(){
  //   return this.cartItems.slice()
  // }

  // private getItemId() {
  //   return this.getItem().map(cartItem => cartItem.product.id);
  // }


  // public addItem(item: CartItem) {

  //   // If item is already in cart, add to the qty and amount, if not push item into cart

  //   if (this.getItemId().includes(item.product.id)) {
  //     this.cartItems.forEach(function (cartItem) {
  //       if (cartItem.product.id === item.product.id) {
  //         cartItem.amount += item.amount;
  //       }
  //     });
      
  //   } else {
  //     this.cartItems.push(item);
      
  //   }
  //   this.itemsChanged.emit(this.cartItems.slice());
  // }

  // public addItems(items: CartItem[]) {
  //   items.forEach((cartItem) => {
  //     this.addItem(cartItem);
  //   });
  // }

  // public removeItem(item: CartItem) {
  //   const indexToRemove = this.cartItems.findIndex(element => element === item);
  //   this.cartItems.splice(indexToRemove, 1);
  //   this.itemsChanged.emit(this.cartItems.slice());
  // }

  // public updateItemAmount(item: CartItem, newAmount: number) {
  //   this.cartItems.forEach((cartItem) => {
  //     if (cartItem.product.id === item.product.id) {
  //       cartItem.amount = newAmount;
  //     }
  //   });
  //   this.itemsChanged.emit(this.cartItems.slice());
  // }

  // public resetCart() {
  //   this.cartItems = [];
  //   this.itemsChanged.emit(this.cartItems.slice());
  // }

  // public getTotal() {
  //   let total = 0;
  //   this.cartItems.forEach((cartItem) => {
  //     total += cartItem.amount * cartItem.product.price;
  //   });
  //   return total;
  // }
  
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  
  addToCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice() : number{
    let subTotal = 0;
    this.cartItemList.map((a : any) => {
      subTotal += a.total;
    })

    return subTotal;
  }

  removeCartItem(product : any){
    this.cartItemList.map((a : any, index : any) => {
      if(product.id === a.id){
        this.cartItemList.splice(index, 1);
      }
    })
  }

  removeAll(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }

}
