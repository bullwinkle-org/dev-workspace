import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShopStateService } from '@dev-workspace/shop';
import { Product } from '@dev-workspace/api-interfaces';

@Component({
  selector: 'dev-workspace-page-catalog',
  templateUrl: './page-catalog.component.html',
  styleUrls: ['./page-catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCatalogComponent {
  constructor(public shopState: ShopStateService) {
  }

  onAddItemClick(item: Product) {
    this.shopState.patch({
      cartItems: [...this.shopState.cartItems, item]
    });
  }
}
