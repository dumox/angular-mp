import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './products/components/product/product.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { CartComponent } from './cart/components/cart/cart.component';

import { ProductsService } from './products/services/products.service';
import { CartService } from './cart/services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent
  ],
  imports: [BrowserModule],
  // Сервисы уже зарегистрированы с помощью декоратора Injectable
  // providers: [
  //   ProductsService,
  //   CartService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule {}
