import { ProductsService } from './../../products/services/products.service';
import { Product } from './../../products/models/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  order: Array<Product> = [];

  constructor(
    private productsService: ProductsService
  ) { }

  getOrder() {
    return this.order;
  }

  addToOrder(product: Product): void {
    this.productsService.updateProduct(product, 'sell');
    this.order.push(product);
  }

  removeFromOrder(product: Product): void {
    const updatedProduct = this.productsService.updateProduct(product, 'cancel');
    this.order.splice(this.order[product.name], 1);
  }
}
