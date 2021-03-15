import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {BookComponent} from "./book/book.component";
import {HomePage} from "./home/home.page";

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'book',
    component: BookComponent,
    loadChildren: () => import('./book/book.module').then( m => m.BookModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
