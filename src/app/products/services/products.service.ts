import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { ACTIONS } from './../../shared/actions';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private id: number = 0;
  private products: Array<Product> = [
    new Product(this.id++, 'Bread', 'Very tasty and useful product', 2, 10, true, false),
    new Product(this.id++, 'Computer', 'Your best friend', 2, 5, true, false),
    new Product(this.id++, 'Jeans', 'Can not imagine your life without it', 3, 50, true, false)
  ];

  constructor() { }

  getProducts(): Array<Product> {
    return this.products;
  }

  getProduct({id}): Product {
    return this.products.find(product => product.id === id);
  }

  updateProduct(product: Product, action): boolean {
    if (product.quantity > 0 && product.isAvailable && action === ACTIONS.BUY) {
      product.quantity--;
      product.isBought = true;
      debugger
      return true;
    }
    if (product.quantity === 0) {
      product.isAvailable = false;
      return false;
    }
    if (action === ACTIONS.RETURN) {
      product.quantity++;
      // product.isBought = false;
      return true;
    }
  }

}
