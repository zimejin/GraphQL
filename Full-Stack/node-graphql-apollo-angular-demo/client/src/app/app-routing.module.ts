import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAddComponent } from './book-add/book-add.component';
import { BookListComponent } from './book-list/book-list.component';
import { RegisterAuthorComponent } from './register-author/register-author.component';

const routes: Routes = [
  {
    path: '', component: BookListComponent
  },
  {
    path: 'add', component: BookAddComponent
  },
  {
    path: 'register', component: RegisterAuthorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
