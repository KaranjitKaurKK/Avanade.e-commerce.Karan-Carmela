import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }, 
  { path: 'profile', loadChildren: () => import('./features/profile/profile.module').then(m => m.ProfileModule) }, 
  { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule) }, 
  { path: 'catalog', loadChildren: () => import('./features/catalog/catalog.module').then(m => m.CatalogModule) },
  { path:'**', redirectTo:'home'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
