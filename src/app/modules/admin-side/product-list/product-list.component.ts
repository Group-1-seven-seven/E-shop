import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
// import { forkJoin, map } from 'rxjs';
import { AdminService } from 'src/app/core/services/admin/admin.service';
import { ProductItem } from 'src/app/models/product-item';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: ProductItem[] = [];

  columns =[
    {isBtn: true, key: "category", isSortable: true, dIcon: false}, 
    {isBtn: false, key: "productName", isSortable: false, dIcon: false},
    {isBtn: false, key: "price", isSortable: false, dIcon: false}, 
    {isBtn: false, key: "sold", isSortable: false, dIcon: false},
  ]

  buttons = [
    {type: "edit", bgColor: "btn-primary"},
    {type: "delete", bgColor: "btn-danger"},
    {type: "view", bgColor: "btn-info"}
  ]

  constructor(private adminService: AdminService, private router: Router) { 
    this.getAllProducts()
  }

  getAllProducts() {
    this.adminService.getAllProducts().subscribe(
      x =>{
        this.products = x.filter(i => i.status === true)
      }
    )
  }

  ngOnInit(): void {
  }

  addProduct =() => {
    this.router.navigate(['admin/add-product'])
  }

  tableAction(event: any) {
    if(event.type === 'edit') {
      this.router.navigate(['admin/add-product'], {queryParams: {id: event.id}})
    }else if(event.type === 'delete') {
      event.status = !event.status
      this.adminService.editProduct(event).subscribe(x => {
        this.getAllProducts()
      })
      // forkJoin([this.adminService.editProduct(event),
      // this.adminService.getAllProducts()]).pipe(
      //   map(([f, s]) => {
      //     this.products = s
      //   })
      // ).subscribe()
      
    }else if(event.type === 'view') {
      this.router.navigate(['admin/product-details'], {queryParams: {id: event.id, type: "products"}})
    }
  }

  tblHeaderAction(event: any) {
    this.getProducts(event.key, event.dIcon)
  }

  getProducts = (data: any, order: any) => {
    this.adminService.getProducts(1, 10, data, order?'desc': 'acs' ).subscribe(x => {
      this.products = x.filter(i => i.status === true)
    })
  }

}
