import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ProductsService } from 'src/app/core/services/product/products.service';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent implements OnInit {

  public searchTerm!: string;
  public productList: any;
  public filterCategory: any;
  searchKey: string = "";

  constructor(private productService: ProductsService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe((res: any) => {
      this.productList = res;
      this.filterCategory = res;

      this.productList.forEach((a : any) => {
        if(a.category === 'Home & Garden'){
          a.category = "Home & Garden"
        }
        Object.assign(a, {quantity : 1, total : a.price})
      });
    });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }

  addToCart(item : any){
    this.cartService.addToCart(item);
  }

  goToCart(){
    this.router.navigate(['user/my-cart']);
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }

  filter(category: string){
    this.filterCategory = this.productList
    .filter((a:any) => {
      if(a.category == category || category == ''){
          return a;
      }
    })
  }

}
