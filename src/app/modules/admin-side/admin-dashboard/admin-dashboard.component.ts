import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/users/admin/admin.service';
import { ProductItem } from 'src/app/models/product-item';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  data = {
    title: "Admin Dashboard",
    buttons: [
      {
      type: "add-product",
      name: "Add Product",
      color: "us-btn-primary"
    }
  ]
  }
  products: ProductItem[] = [];
  constructor(private router: Router, private adminServices: AdminService) { 
    this.getProducts('sold', true)
  }

  columns =[
    {key: "category", isSortable: true, dIcon: false}, 
    {key: "productName", isSortable: true, dIcon: false},
    {key: "price", isSortable: true, dIcon: false}, 
    {key: "sold", isSortable: true, dIcon: false}
  ]
  
  ngOnInit(): void {
  }
  goToAddProduct =() => {
    this.router.navigate(['admin/add-product'])
  }

  tblHeaderAction(event: any) {
    this.getProducts(event.key, event.dIcon)
  }

  getProducts = (data: any, order: any) => {
    this.adminServices.getProducts(1, 5, data, order?'desc': 'acs' ).subscribe(x => {
      this.products = x
    })
  }

  comActionEmit =(data: any) => {
    if(data.type === 'add-product'){
      this.router.navigate(['admin/add-product'])
    }
  }
}

