import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Order } from '../../models/order';
import { ACTIONS } from './../../../shared/actions';

@Component({
  selector: 'app-cart-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() order: Order;

  @Output() updateQuantity: EventEmitter<any> = new EventEmitter();
  @Output() removeFromCart: EventEmitter<any> = new EventEmitter();

  constructor(
  ) {}

  addOneMore(): void {
    this.updateQuantity.emit({
      id: this.order.id,
      productId: this.order.productId,
      action: ACTIONS.BUY});
  }

  removeOne(): void {
    this.updateQuantity.emit({
      id: this.order.id,
      productId: this.order.productId,
      action: ACTIONS.RETURN});
  }

  cancel(): void {
    this.removeFromCart.emit(this.order);
  }
}
