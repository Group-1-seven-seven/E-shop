import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { RouterModule } from '@angular/router';
import { CheckoutSectionComponent } from './checkout-section/checkout-section.component';
import { UserOrderComponent } from './user-order/user-order.component';

const routes: Routes = [

  {
  path: "user-profile",
  component: UserDashboardComponent
  },
  {
  path: "user-cart",
  component: UserCartComponent
  },
  {
  path: "checkout-section",
  component: CheckoutSectionComponent
  },
  {
  path: "user-orders",
  component: UserOrderComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UserSideRoutingModule { }
