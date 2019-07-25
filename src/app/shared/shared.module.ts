import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedService } from './shared.service';
import { HighliterDirective } from './directives/highliter.directive';


@NgModule({
  declarations: [
    HighliterDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
  ],
  exports: [
    HighliterDirective
  ]
})
export class SharedModule { }
