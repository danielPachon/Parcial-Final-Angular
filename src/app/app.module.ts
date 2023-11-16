import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './view/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { NotAuthorizedComponent } from './view/not-authorized/not-authorized.component';
import { HomeComponent } from './view/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { AuthService } from './auth/auth.service';
import { DataService } from './services/data.service';
import { ProductService } from './services/product.service';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './shared/guards/admin.guard';
import { ClientGuard } from './shared/guards/client.guard';
import { GuestGuard } from './shared/guards/guest.guard';
import { DiscountInterceptor } from './shared/interceptors/discount.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductsComponent,
    PromotionsComponent,
    NotAuthorizedComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    AuthService,
    DataService,
    ProductService,
    AuthGuard,
    AdminGuard,
    ClientGuard,
    GuestGuard,
    { provide: HTTP_INTERCEPTORS, useClass: DiscountInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
