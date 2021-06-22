import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './components/product-item/product-item.component';

export * from './services/shop-state.service';
export * from './services/shop.service';
export * from './services/shop-api.service';
export * from './components/product-item/product-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ProductItemComponent
  ],
  exports: [
    ProductItemComponent
  ]
})
export class ShopModule {
}
