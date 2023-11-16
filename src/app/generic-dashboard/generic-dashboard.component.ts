import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-generic-dashboard',
  templateUrl: './generic-dashboard.component.html',
  styleUrls: ['./generic-dashboard.component.css']
})
export class GenericDashboardComponent implements OnInit {
  userName: string = '';
  showProducts: boolean = true;
  showPromotions: boolean = false;
  products: any[] = [];
  specialProducts: any[] = [];

  constructor(private authService: AuthService, private productService: ProductService) {}

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    this.userName = currentUser ? currentUser.name : '';
    this.products = this.productService.getProducts();
    this.specialProducts = this.productService.getSpecialProducts();
  }

  toggleView(view: string) {
    this.showProducts = view === 'products';
    this.showPromotions = view === 'promotions';
  }
}