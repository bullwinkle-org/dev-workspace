import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageCartComponent } from './page-cart/page-cart.component';
import { ShopModule } from '@dev-workspace/shop';

@NgModule({
  imports: [
    CommonModule,
    ShopModule,
    RouterModule.forChild([
      {path: '', component: PageCartComponent}
    ]),
  ],
  declarations: [
    PageCartComponent
  ],
  exports: [
    PageCartComponent
  ],
})
export class PageCartModule {}
