import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css'],
})
export class PromotionsComponent implements OnInit {
  promotions: any[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.promotions = this.productService.getPromotions();
  }
}