import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AuthorDetailComponent } from './pages/author-detail/author-detail.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{
  path: '',
  children: [{
    path: ':id',
    component: AuthorDetailComponent
  }]
}]

@NgModule({
  declarations: [AuthorDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AuthorModule { }
