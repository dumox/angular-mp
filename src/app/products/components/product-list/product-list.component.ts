import { Component, OnInit, DoCheck } from '@angular/core';

import { Observable } from 'rxjs';

import { CartService } from './../../../cart/services/cart.service';
import { Product } from './../../models/product';

import { ProductsService } from './../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, DoCheck{
  products: Array<Product>;
  products$;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
    ) { }

  ngOnInit() {
    this.getProductList();
  }

  ngDoCheck() {
    this.getProductList();
  }

  getProductList(): void {
    this.productsService.getProducts().subscribe(products => this.products$ = products);
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
