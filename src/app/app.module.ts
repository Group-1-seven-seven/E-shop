import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/section/header/header.component';
import { FooterComponent } from './shared/section/footer/footer.component';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { CartSectionComponent } from './components/cart-section/cart-section.component';
import { AdminLayoutComponent } from './shared/layout/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './shared/layout/user-layout/user-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { FilterPipe } from './shared/filter/filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { AdminSidebarComponent } from './shared/layout/admin-sidebar/admin-sidebar.component';
import { LoginFormComponent } from './auth-components/signin/login-form.component';
import { RegisterFormComponent } from './auth-components/signup/register-form.component';
import { ForgotpassFormComponent } from './auth-components/forgotpass/forgotpass-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeLayoutComponent,
    CartSectionComponent,
    AdminLayoutComponent,
    UserLayoutComponent,
    AdminSidebarComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ForgotpassFormComponent,
    HomeSectionComponent,
    ProductSectionComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
