import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageCatalogComponent } from './page-catalog/page-catalog.component';
import { ShopModule } from '@dev-workspace/shop';

@NgModule({
  imports: [
    CommonModule,
    ShopModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: PageCatalogComponent }
    ])
  ],
  declarations: [
    PageCatalogComponent
  ],
  exports: [
    PageCatalogComponent
  ]
})
export class PageCatalogModule {
}
