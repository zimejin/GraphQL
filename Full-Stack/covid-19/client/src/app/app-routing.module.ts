import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './view/theme/base/base.component';


const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children:
    [
      {
        path: '',
        loadChildren: () => import('../app/view/pages/world/world.module').then(m=>m.WorldModule)
      },
      {
        path: 'world',
        loadChildren: () => import('../app/view/pages/country/country.module').then(m=>m.CountryModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
