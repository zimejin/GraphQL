import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    TopBarComponent
  ]
})
export class PartialsModule { }
