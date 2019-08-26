import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from '../models/product';
import { ACTIONS } from './../../shared/actions';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private id = 0;
  products: Array<Product> = [
    new Product(this.id++, 'Bread', 'Very tasty and useful product', 2, 10, true, false),
    new Product(this.id++, 'Computer', 'Your best friend', 100, 5, true, false),
    new Product(this.id++, 'Jeans', 'Can not imagine your life without it', 3, 50, true, false)
  ];
  productsCache: Array<Product> = [];

  constructor() {}

  getProducts(): Observable<Array<Product>> {
    return of(this.products);
  }

  getProduct({id}): Product {
    return this.products.find(product => product.id === id);
  }

  updateProduct(product: Product, action): boolean {
    if (!this.productsCache.length) {
      this.productsCache = this.products.map(productItem => Object.assign({}, productItem));
      console.log('cached ', this.productsCache);
    }
    if (product.quantity > 0 && product.isAvailable && action === ACTIONS.BUY) {
      product.quantity--;
      product.isBought = true;
      return true;
    }
    if (product.quantity === 0) {
      product.isAvailable = false;
      return false;
    }
    if (action === ACTIONS.RETURN) {
      product = this.getProductFromCache(product);
      return true;
    }
  }

  getProductFromCache({id}): Product {
    return this.productsCache.find(product => product.id === id);
  }

  restoreAllProducts(): void {
    this.products = this.productsCache;
    console.log('products ', this.products);
    console.log('productsCache ', this.productsCache);
  }

  restoreProduct(product): void {
    const productToRestore = this.getProductFromCache(product);
    const index = this.products.indexOf(this.getProduct(product));
    this.products[index] = productToRestore;
  }
}
