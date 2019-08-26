import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  order: Order[];
  title = 'You have bought:';
  filterBy: string;
  descendingOrder: true;

  constructor(
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.getOrderList();
  }

  getOrderList() {
    this.order = this.cartService.getOrderList();
  }

  onUpdateQuantity(orderData: {}): void {
    this.cartService.updateOrderQuantity(orderData);
  }

  getPrice(): number {
    return this.cartService.getPrice();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.getOrderList();
  }

  onRemoveFromCart(product): void {
    this.cartService.removeFromOrder(product);
  }

  onFilterByValue(filterValue): void {
    this.filterBy = filterValue;
  }

  onFilterOrderValue(filterOrderValue): void {
    this.descendingOrder = filterOrderValue;
  }
}
