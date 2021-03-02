import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleDirective } from './directives/toggle.directive';
import { OffcanvasDirective } from './directives/offcanvas.directive';
import { DigitPipePipe } from './pipes/digit-pipe.pipe';
import { PercentigePipe } from './pipes/percentige.pipe';



@NgModule({
  declarations: [
    ToggleDirective,
    OffcanvasDirective,
    DigitPipePipe,
    PercentigePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToggleDirective,
    OffcanvasDirective,
    DigitPipePipe,
    PercentigePipe
  ]
})
export class CoreModule { }
