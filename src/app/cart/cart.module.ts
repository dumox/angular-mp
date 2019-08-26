import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';

import { SharedService } from './../shared/shared.service';
import { SharedModule } from '../shared/shared.module';
import { CartFilterComponent } from './components/cart-filter/cart-filter.component';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent,
    CartFilterComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    SharedService
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
