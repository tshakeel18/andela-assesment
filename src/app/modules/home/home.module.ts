import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { SubjectListComponent } from '../shared/components/subject-list/subject-list.component';
import { LoaderComponent } from '../shared/components/loader/loader.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
}];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    SubjectListComponent,
    LoaderComponent,
    RouterModule.forChild(routes)
  ], 
})
export class HomeModule { }
