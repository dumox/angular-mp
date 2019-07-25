import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  @Output() addToCart: EventEmitter<Product> = new EventEmitter();
  @Output() removeFromCart: EventEmitter<Product> = new EventEmitter();

  constructor() { }


  ngOnInit() {
  }

  onBuy(): void {
    console.log(`${this.product.name} is bought`);
    this.addToCart.emit(this.product);
  }

  onCancel(): void {
    console.log(`${this.product.name} is canceled`);
    this.removeFromCart.emit(this.product);
  }

}
