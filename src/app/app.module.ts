import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { GenericDashboardComponent } from './generic-dashboard/generic-dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service';
import { PromotionsComponent } from './promotions/promotions.component';
  
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    GenericDashboardComponent,
    ProductsComponent,
    PromotionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
