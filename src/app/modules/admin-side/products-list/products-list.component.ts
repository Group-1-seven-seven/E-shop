import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin, map } from 'rxjs';
import { AdminService } from 'src/app/core/services/admin/admin.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})

export class ProductsListComponent implements OnInit {

  products: Product[] = [];

  columns =[
    {isBtn: true, key: "category", isSortable: false, dIcon: false}, 
    {isBtn: true, key: "productName", isSortable: false, dIcon: false},
    {isBtn: true, key: "price", isSortable: false, dIcon: false}, 
    {isBtn: true, key: "sold", isSortable: false, dIcon: false}
  ]

  buttons = [
    {type: "edit", icon: "bx-pencil", bgColor: "btn-primary"},
    {type: "delete", icon: "bx-trash", bgColor: "btn-danger"},
    {type: "view", icon: "bxs-detail", bgColor: "btn-info"}
  ]

  constructor(private adminService: AdminService, private router: Router) {
    this.adminService.getAllProduct().subscribe(
      x =>{
        this.products = x.filter(i => i.isActive === true)
      }
    )
   }

  ngOnInit(): void {
  }

  goToAddProduct =() => {
    this.router.navigate(['admin/add-product'])
  }

  // tblHeaderAction(event: any) {
  //   this.
  // }

  tableAction(event: any) {
    if(event.type === 'edit') {
      this.router.navigate(['admin/add-product'], {queryParams: {id: event.id}})
    }else if(event.type === 'delete') {
      forkJoin([this.adminService.deleteProduct(event.id),
      this.adminService.getAllProduct()]).pipe(
        map(([first, second]) => {
          this.products = second
        })
      ).subscribe()
      
    }else if(event.type === 'view') {
      this.router.navigate(['admin/product-details'])
    }
  }
}
