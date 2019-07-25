import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';

// import { SharedModule } from './../shared/shared.module';
import { SharedService } from './../shared/shared.service';
import { SharedModule } from '../shared/shared.module';
// import { HighliterDirective } from './../shared/directives/highliter.directive';

@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent,
    // HighliterDirective
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
