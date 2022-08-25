import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'admin-dashboard',
    pathMatch: 'full'
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  },
  {
    path: 'products-list',
    component: ProductsListComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'product-details',
    component: ProductDetailsComponent
  },
  {
    path: "users-list",
    component: UsersListComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
