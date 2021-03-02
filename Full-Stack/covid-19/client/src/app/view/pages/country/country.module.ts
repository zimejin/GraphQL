import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GraphQLModule } from 'src/app/graphql.module';
import { CountryComponent } from './country.component';
import { PartialsModule } from '../../partials/partials.module';


const routes : Routes = [
  {
    path: ':country',
    component: CountryComponent
  }
];

@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GraphQLModule,
    PartialsModule
  ]
})
export class CountryModule { }
