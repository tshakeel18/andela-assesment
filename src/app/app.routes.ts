import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',  
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }, {
  path: 'wishlist',
  loadChildren: () => import('./modules/wishlist/wishlist.module').then(m => m.WishlistModule)
  }, {
    path: 'author',
    loadChildren: () => import('./modules/author/author.module').then(m => m.AuthorModule)
  }, {
    path: 'subject',
    loadChildren: () => import('./modules/subject/subject.module').then(m => m.SubjectModule)
}];
