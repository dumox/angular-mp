import { Injectable } from '@angular/core';

import { ProductsService } from './../../products/services/products.service';

import { Product } from './../../products/models/product';
import { Order } from './../models/order';
import { ACTIONS } from './../../shared/actions';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  id = 0;
  orderList: Array<Order> = [];


  constructor(
    private productsService: ProductsService,
  ) {}

  getOrderList(): Order[] {
    return this.orderList;
  }

  getOrder({id}): Order {
    return this.orderList.find(order => order.id === id);
  }

  addToOrder(product: Product): void {
    if (this.productsService.updateProduct(product, ACTIONS.BUY)) {
      const { name, price, id: productId } = product;
      this.orderList.push(new Order(this.id++, productId, name, 1, price));
      console.log(this.orderList);
    }
  }

  removeFromOrder(product: Product): void {
    const updatedProduct = this.productsService.updateProduct(product, ACTIONS.RETURN);
    this.orderList.splice(this.orderList[product.name], 1);
  }

  updateOrderQuantity(orderData): void {
    console.log('orderData ', orderData);
    const {action, id, productId} = orderData;
    const productToUpdate = this.productsService.getProduct({id: productId});
    const order = this.getOrder({id});

    if (action === ACTIONS.BUY && this.productsService.updateProduct(productToUpdate, action)) {
        order.quantity++;
    }

    if (action === ACTIONS.RETURN && order.quantity > 0) {
      this.productsService.updateProduct(productToUpdate, action);
      order.quantity--;
    }
  }

  getPrice(): number {
    if (this.orderList.length) {
      return this.orderList.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
    }
    return 0;
  }

  clearCart(): void {
    this.orderList = [];
    this.id = 0;
    this.productsService.restoreAllProducts();
    this.orderList = [];
  }
}
