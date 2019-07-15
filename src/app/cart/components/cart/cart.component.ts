import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/products/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  order: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.order = this.cartService.getOrder();
  }

  getPrice(): number {
    // может лучше эту логику вынести в геттер сервиса? 
    return this.order.reduce((prev, curr) => prev + curr.price, 0);
  }
}
