import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { SharedModule } from '../shared/shared.module';
import { SubjectListComponent } from '../shared/components/subject-list/subject-list.component';
import { NoDataComponent } from '../shared/components/no-data/no-data.component';

const routes: Routes = [{
  path: '',
  component: WishlistComponent
}];

@NgModule({
  declarations: [WishlistComponent],
  imports: [
    CommonModule,
    SharedModule,
    SubjectListComponent,
    NoDataComponent,
    RouterModule.forChild(routes)
  ]
})
export class WishlistModule { }
