import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Product } from '@dev-workspace/api-interfaces';
import { ShopStateService } from '@dev-workspace/shop';


@Component({
  selector: 'dev-workspace-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCartComponent {
  constructor(public shopState: ShopStateService) {
  }

  onRemoveItemClick(item: Product) {
    this.shopState.patch({
      cartItems: this.shopState.cartItems.filter(it => it !== item)
    });
  }
}
