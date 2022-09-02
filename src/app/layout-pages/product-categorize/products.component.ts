import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/core/models/products.interface';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ProductsService } from 'src/app/core/services/product/products.service';
// import { CartItem } from 'src/app/models/cart-item';
// import { of } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList: any[] | undefined;
  public filterCategories : any;
  public searchTerm !: string;
  searchKey: string = "";
  userInfo: any
  cartData: any 

  constructor(
    private productService: ProductsService, 
    private cartService: CartService, 
    private router: Router,
    private toast: ToastrService
  ) {
    if(localStorage.getItem("user")){
      this.userInfo = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("user"))))
    }
   }

   
  ngOnInit(): void {
    this.productService.getProduct().subscribe(res => {
      this.productList = res;
      this.filterCategories = res;

      this.productList.forEach((a : any) => {
        Object.assign(a, {quantity : 1, total : a.price})
      });
    });

    this.cartService.search.subscribe((value: any) => {
      this.searchKey = value;
    })
    this.getCartData()
  }

  getCartData = () => {
    return this.cartService.getProductCart(this.userInfo.user?.id).subscribe(data => {
      // console.log(x)
      this.cartData = data
    })
  }

  addToCart(item : any): any{
    const data = {customerId: this.userInfo.user?.id, qty: 1, products: ([Object.assign(item, {qty: 1, cartTotal: item.price * 1})]) as Product[] }
    if(!this.cartData.length) {
      return  this.cartService.addProductCart(data).subscribe(x => {
      })
    }

    let products: any[] = this.cartData[0].products
    products.filter(x => {
      if(x.id === item.id) {
        this.toast.error("Item already exist in your cart.")
      }else {
        this.cartData[0].products.push(Object.assign(item, {qty: 1, cartTotal: item.price * 1}))
        this.cartService.addCustomerCart({id: this.cartData[0].id, cart: this.cartData[0]}).subscribe(x => {
          this.toast.success("Successfully added to cart!")
        })
      }

      
    })
    
  }
  
  goToCart= () => {
    this.router.navigate(['user/user-cart']);
  }

  // search(event:any){
  //   this.searchTerm = (event.target as HTMLInputElement).value;
  //   console.log(this.searchTerm);
  //   this.cartService.search.next(this.searchTerm);
  // }

  filter(category: string){
    this.filterCategories = this.productList!
    .filter((a:any) => {
      if(a.category === category || category === ''){
          return a;
      }
    })
  }


}
