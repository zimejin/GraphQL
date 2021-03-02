import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { GraphQLModule } from 'src/app/graphql.module';
import { CoreModule } from 'src/app/core/core.module';
import { PartialsModule } from '../partials/partials.module';

@NgModule({
  declarations: [
    BaseComponent,
    HeaderComponent,
    AsideComponent,

  ],
  exports: [
    BaseComponent,
    HeaderComponent,
    AsideComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    PerfectScrollbarModule,
    GraphQLModule,
    CoreModule,
    PartialsModule
  ]
})
export class ThemeModule { }
