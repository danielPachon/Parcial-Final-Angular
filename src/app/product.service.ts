import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    {
      id: 1,
      name: 'Producto 1',
      price: 19.99,
      specialPrice: 15.99,
      description: 'Descripción del Producto 1',
      image: 'https://pepeganga.vtexassets.com/arquivos/ids/664243/100338311-1.png?v=637735344841870000'
    },
    {
      id: 2,
      name: 'Producto 2',
      price: 29.99,
      specialPrice: 24.99,
      description: 'Descripción del Producto 2',
      image: 'https://cdn.luegopago.com/temporary/a889214a-585b-45d4-97f0-7fd216cc996d.jpg'
    },
    {
      id: 3,
      name: 'Producto 3',
      price: 29.99,
      specialPrice: 24.99,
      description: 'Descripción del Producto 2',
      image: 'https://cdn.luegopago.com/temporary/a889214a-585b-45d4-97f0-7fd216cc996d.jpg'
    },
  ];

  getProducts(): any[] {
    return this.products;
  }

  getSpecialProducts(): any[] {
    return this.products.filter(product => product.specialPrice !== undefined);
  }
}