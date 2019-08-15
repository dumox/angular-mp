import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedService } from './shared.service';
import { HighliterDirective } from './directives/highliter.directive';
import { TextSizeTransformerDirective } from './directives/text-size-transformer.directive';


@NgModule({
  declarations: [
    HighliterDirective,
    TextSizeTransformerDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [
  ],
  exports: [
    HighliterDirective,
    TextSizeTransformerDirective
  ]
})
export class SharedModule { }
