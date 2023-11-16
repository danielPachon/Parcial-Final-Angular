import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { GenericDashboardComponent } from './generic-dashboard/generic-dashboard.component';
import { AuthGuard } from './auth.guard';
import { ProductsComponent } from './products/products.component';
import { PromotionsComponent } from './promotions/promotions.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'generic-dashboard', component: GenericDashboardComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductsComponent },
  { path: 'promotions', component: PromotionsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }