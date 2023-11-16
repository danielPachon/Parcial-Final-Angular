import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: any[] = [
    {
      name: 'Televisor Samsung Cu7000 Crystal Uhd 55 pulgadas 2023',
      price: 1769000,
      description:
        'Samsung es reconocida a nivel mundial como una empresa líder en la industria tecnológica. Todos sus productos son diseñados con una calidad superior y pensados para contribuir a un futuro mejor. Por eso, hará que disfrutes de una experiencia incomparable.',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_2X_713886-MLU72627522494_112023-F.webp',
    },
    {
      name: 'Nintendo Switch OLED 64GB Standard color blanco y negro',
      price: 2395900,
      description:
        'Adaptada a tus necesidades Guarda tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 64 GB.',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_2X_625423-MLA47920375564_102021-F.webp',
    },
  ];

  private promotions: any[] = [
    {
      name: 'Televisor Samsung Cu7000 Crystal Uhd 55 pulgadas 2023',
      price: 1569000,
      description:
        'Samsung es reconocida a nivel mundial como una empresa líder en la industria tecnológica. Todos sus productos son diseñados con una calidad superior y pensados para contribuir a un futuro mejor. Por eso, hará que disfrutes de una experiencia incomparable.',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_2X_713886-MLU72627522494_112023-F.webp',
    },
    {
      name: 'Nintendo Switch OLED 64GB Standard color blanco y negro',
      price: 1995900,
      description:
        'Adaptada a tus necesidades Guarda tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 64 GB.',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_2X_625423-MLA47920375564_102021-F.webp',
    },
  ];

  constructor() {}

  getProducts(): any[] {
    return this.products;
  }

  getPromotions(): any[] {
    return this.promotions;
  }
}
