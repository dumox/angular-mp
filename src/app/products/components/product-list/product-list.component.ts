import { CartService } from './../../../cart/services/cart.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  // файла стилей нет
  // styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onAddToCart(product: Product): void {
    console.log(product, 'listComponent');
    this.cartService.addToOrder(product);
  }

  onRemoveFromCart(product: Product): void {
    console.log(product, 'listComponent');
    this.cartService.removeFromOrder(product);
  }

}
