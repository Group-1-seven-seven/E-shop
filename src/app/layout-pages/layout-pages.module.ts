import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './layout-pages-routing.module';
import { ProductsComponent } from './product-categorize/products.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { FilterPipe } from '../shared/filter/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HomeSectionComponent } from '../components/home-section/home-section.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HomeSectionComponent,
    ProductsComponent,
    HomeLayoutComponent,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ],
})
export class LayoutPagesModule { }
