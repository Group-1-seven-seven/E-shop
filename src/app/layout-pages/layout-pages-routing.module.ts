import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { ProductsComponent } from './product-categorize/products.component';

const ROUTES: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeLayoutComponent
  },
  {
    path: "products",
    component: ProductsComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
