import { Injectable } from '@angular/core';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Array<Product> = [
    new Product('Bread', 'Very tasty and useful product', 2, 10, true, false),
    new Product('Computer', 'Your best friend', 2, 5, true, false),
    new Product('Jeans', 'Can not imagine your life without it', 3, 50, true, false)
  ];

  constructor() { }

  getProducts(): Array<Product> {
    return this.products;
  }

  updateProduct({name}: Product, action): Product {
    const productToUpdate = this.products.find( product => product.name === name);
    action === 'sell'
    // можно попасть в отрицательное количество
      ? (productToUpdate.amount--, productToUpdate.isBought = true)
      : (productToUpdate.amount++, productToUpdate.isBought = false);

    return productToUpdate;
  }

}
