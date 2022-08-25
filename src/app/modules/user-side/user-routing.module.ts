import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { OrderSectionComponent } from './order-section/order-section.component';
import { CheckoutSectionComponent } from './checkout-section/checkout-section.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'user-dashboard',
  pathMatch: "full"
},{
  path: "user-dashboard",
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
  path: "order-section",
  component: OrderSectionComponent
}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UserRoutingModule { }
