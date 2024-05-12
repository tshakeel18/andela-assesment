import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SubjectDetailComponent } from './pages/subject-detail/subject-detail.component';
import { LoaderComponent } from '../shared/components/loader/loader.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{
  path: '',
  children: [{
    path: ':id',
    component: SubjectDetailComponent
  }]
}];

@NgModule({
  declarations: [SubjectDetailComponent],
  imports: [
    CommonModule,
    LoaderComponent,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SubjectModule { }
