import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'detail', loadChildren: './detail/detail.module#DetailPageModule' },
  {
    path: 'detail/:id',
    loadChildren: './detail/detail.module#DetailPageModule'
  },
  { path: 'edit', loadChildren: './edit/edit.module#EditPageModule' },
  {
    path: 'edit/:id',
    loadChildren: './edit/edit.module#EditPageModule'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
