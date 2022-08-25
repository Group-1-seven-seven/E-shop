import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin/admin.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  data = {
    title: "Dashboard",
    buttons: [
      {
      type: "add-product",
      name: "Add Product",
      color: "us-btn-primary"
    }
  ]
  }
  products: Product[] = [];
  constructor(private router: Router, private adminServices: AdminService) { 
      // this.adminServices.getProducts().subscribe(x => {
      //   console.log(x[0].category)
      //   this.products = x
      // })
      this.getProducts('sold', true)

  }

  // columns =["category", "productName","price", "sold"]
  columns =[
    {isBtn: true, key: "category", isSortable: true, dIcon: false}, 
    {isBtn: true, key: "productName", isSortable: true, dIcon: false},
    {isBtn: true, key: "price", isSortable: true, dIcon: false}, 
    {isBtn: true, key: "sold", isSortable: true, dIcon: false}
  ]

  
  ngOnInit(): void {
  }

  actionEmit =(data: any) => {
    if(data.type === 'add-product'){
      this.router.navigate(['admin/add-product'])
    }
  }

  goToAddProduct =() => {
    this.router.navigate(['admin/add-product'])
  }

  tblHeader(event: any) {
    this.getProducts(event.key, event.dIcon)
  }

  getProducts = (data: any, order: any) => {
    this.adminServices.getProduct(1, 5, data, order?'desc': 'acs' ).subscribe(x => {
      this.products = x
    })
  }

}

