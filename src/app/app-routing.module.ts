import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './view/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { NotAuthorizedComponent } from './view/not-authorized/not-authorized.component';
import { HomeComponent } from './view/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './shared/guards/admin.guard';
import { ClientGuard } from './shared/guards/client.guard';
import { GuestGuard } from './shared/guards/guest.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard, AdminGuard],
  },
  { path: 'products', component: ProductsComponent },
  {
    path: 'promotions',
    component: PromotionsComponent,
    canActivate: [AuthGuard, ClientGuard],
  },
  { path: 'not-authorized', component: NotAuthorizedComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
