import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuard } from './core/guards/admin-guard/admin-auth.guard';
import { RoleGuard } from './core/guards/role-guard/role.guard';
import { UserAuthGuard } from './core/guards/user-guard/user-auth.guard';
import { AdminLayoutComponent } from './shared/layout/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/layout/auth-layout/auth-layout.component';
import { PagesLayoutComponent } from './shared/layout/pages-layout/pages-layout.component';
import { UserLayoutComponent } from './shared/layout/user-sidebar/user-layout.component';

const routes: Routes = [{
  path: '',
  redirectTo: "layout-pages/home",
  pathMatch: 'full'
},
{
  path: "",
  component: AuthLayoutComponent,
  children: [
    {
      path: "auth",
      loadChildren: () => import('./components/auth-components/auth.module').then(b => b.AuthModule)
    }
  ]
},
{
  path: "",
  component: PagesLayoutComponent,
  canActivate: [RoleGuard],
  children: [
    {
      path: "layout-pages",
      loadChildren: ()=> import('./layout-pages/layout-pages.module').then(b => b.LayoutPagesModule)
    }
  ]
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
