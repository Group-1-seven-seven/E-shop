import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSideRoutingModule } from './admin-side-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableSectionComponent } from 'src/app/components/table-section/table-section.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CardSectionComponent } from 'src/app/components/card-section/card-section.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AdminCommandComponent } from './admin-command/admin-command.component';
// import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    ProductListComponent,
    AddProductComponent,
    TableSectionComponent,
    ProductDetailsComponent,
    CardSectionComponent,
    UsersListComponent,
    AdminCommandComponent
  ],
  imports: [
    AdminSideRoutingModule,
    ReactiveFormsModule,
    FormsModule,  
    CommonModule,
  ],
  providers: [
    FormBuilder
  ]
})
export class AdminSideModule { }
