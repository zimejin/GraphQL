import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorldComponent } from './world.component';
import { GraphQLModule } from 'src/app/graphql.module';
import { PartialsModule } from '../../partials/partials.module';


const routes : Routes = [
  {
    path: '',
    component: WorldComponent
  }
];

@NgModule({
  declarations: [
    WorldComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    GraphQLModule,
    PartialsModule
  ],
  providers: [

  ]
})
export class WorldModule { }
