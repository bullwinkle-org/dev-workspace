import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'catalog',
    loadChildren: () => import('@dev-workspace/page-catalog').then(m => m.PageCatalogModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('@dev-workspace/page-cart').then(m => m.PageCartModule)
  },
  {
    path: '**',
    loadChildren: () => import('@dev-workspace/page-not-found').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
