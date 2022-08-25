import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRoutingModule } from './user-routing.module';
import { OrderSectionComponent } from './order-section/order-section.component';
import { CheckoutSectionComponent } from './checkout-section/checkout-section.component';
import { UserCartComponent } from './user-cart/user-cart.component';




@NgModule({
  declarations: [ 
    UserDashboardComponent,
    UserCartComponent,
    CheckoutSectionComponent,
    OrderSectionComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserSideModule { }
