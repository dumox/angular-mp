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
  title: string = 'The List of products:';

  constructor(
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.order = this.cartService.getOrderList();
  }

  // желательно указывать тип параметров
  onUpdateQuantity(orderData): void {
    this.cartService.updateOrderQuantity(orderData);
  }

  getPrice(): number {
    return this.cartService.getPrice();
  }

}
