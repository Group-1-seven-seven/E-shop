import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserSideRoutingModule } from './user-side-routing.module';
import { CheckoutSectionComponent } from './checkout-section/checkout-section.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

@NgModule({
  declarations: [
    UserDashboardComponent,
    UserCartComponent,
    CheckoutSectionComponent,
    UserOrderComponent
  ],
  imports: [
    CommonModule,
    UserSideRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [
    FormBuilder
  ]
})
export class UserSideModule { }
