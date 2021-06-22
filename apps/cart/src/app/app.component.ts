import { Component } from '@angular/core';
import { AvailableCurrency, ShopStateService } from '../../../../libs/shop/src/lib/services/shop-state.service';

@Component({
  selector: 'dev-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public shopState: ShopStateService
  ) {
  }

  onCurrencyChange(currency: string) {
    this.shopState.patch({ currency: currency as AvailableCurrency });
  }
}
