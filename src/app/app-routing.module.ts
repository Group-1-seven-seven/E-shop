import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpassFormComponent } from './auth-components/forgotpass/forgotpass-form.component';
import { LoginFormComponent } from './auth-components/signin/login-form.component';
import { RegisterFormComponent } from './auth-components/signup/register-form.component';
import { ProductSectionComponent } from './components/product-section/product-section.component';
import { AdminAuthGuard } from './core/guards/admin-guard/admin-auth.guard';
import { UserAuthGuard } from './core/guards/user-guard/user-auth.guard';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { AdminLayoutComponent } from './shared/layout/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './shared/layout/user-layout/user-layout.component';

const ROUTES: Routes = [{
  path: '',
  redirectTo: "forgotpassform",
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginFormComponent
},
{
  path: "register",
  component: RegisterFormComponent
},
{
  path: "forgotpassform",
  component: ForgotpassFormComponent
},
{
  path: "home",
  component: HomeLayoutComponent
},
{
  path: "products",
  component: ProductSectionComponent
},
{
  path: '',
  component: UserLayoutComponent,
  canActivate: [UserAuthGuard],
  children: [
    {
      path: "user",
      loadChildren: () =>   import('./modules/user-side/user-side.module').then(b => b.UserSideModule)
    },
  ]
},
{
  path: '',
  component: AdminLayoutComponent,
  canActivate: [AdminAuthGuard],
  children: [
    {
      path: 'admin',
      loadChildren: () => import('./modules/admin-side/admin-side.module').then(b => b.AdminSideModule)
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
