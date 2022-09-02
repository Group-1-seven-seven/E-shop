import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { CartService } from 'src/app/core/services/cart/cart.service';
// import { ProductsService } from 'src/app/core/services/product/products.service';

@Component({
  selector: 'app-product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss']
})
export class ProductSectionComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit(): void {
    // this.productService.getProduct().subscribe(res => {
    //   this.productList = res;
    //   this.filterCategory = res;

    //   this.productList.forEach((a : any) => {
    //     Object.assign(a, {quantity : 1, total : a.price})
    //   });
    // });

    // this.cartService.search.subscribe((val: any) => {
    //   this.searchKey = val;
    // })
  }


}
