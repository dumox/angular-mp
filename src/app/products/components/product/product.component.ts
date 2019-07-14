import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  product: Product;

  @Output()
  addToCart: EventEmitter<Product> = new EventEmitter();
  @Output()
  removeFromCart: EventEmitter<Product> = new EventEmitter();

  constructor() { }


  ngOnInit() {
  }

  onBuy(product: Product): void {
    console.log(`${product.name} is bought`);
    this.addToCart.emit(product);
  }

  onCancel(product: Product): void {
    console.log(`${product.name} is canceled`);
    this.removeFromCart.emit(product);
  }

}
