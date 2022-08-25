import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { TableSectionComponent } from 'src/app/components/table-section/table-section.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CardSectionComponent } from 'src/app/components/card-section/card-section.component';
import { AdminCommandComponent } from './admin-command/admin-command.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ProductsListComponent } from './products-list/products-list.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    ProductsListComponent,
    AddProductComponent,
    TableSectionComponent,
    ProductDetailsComponent,
    CardSectionComponent,
    AdminCommandComponent,
    UsersListComponent
  ],
  imports: [
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,  
    CommonModule,
  ],
  providers: [
    FormBuilder
  ]
})
export class AdminSideModule { }
