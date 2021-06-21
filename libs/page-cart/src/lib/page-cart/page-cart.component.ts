import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Currency } from '@dev-workspace/api-interfaces';
import { ShopApiService } from '../../../../shop/src/lib/services/shop-api.service';

interface CartItem {
  id: string;
}

@Component({
  selector: 'dev-workspace-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCartComponent implements OnInit {
  get items(): CartItem[] {
    return this.state$.getValue().items;
  }

  get currencies(): Currency[] {
    return this.state$.getValue().currencies;
  }

  get currency(): Currency[] {
    return this.state$.getValue().currency;
  }

  state$: BehaviorSubject<any> = new BehaviorSubject({
    items: [],
    currencies: [],
    currency: undefined
  });

  constructor(private shopApiService: ShopApiService) {
  }

  ngOnInit(): void {
    console.warn(this.shopApiService);

    this.shopApiService.getCurrenciesRates().subscribe(
      (a) => {
        console.warn('next', a);
      },
      (a) => {
        console.warn('error', a);
      },
      () => {
        console.warn('complete');
      }
    );

    this.shopApiService.getCurrenciesInfo().subscribe(
      (a) => {
        console.warn('next', a);
      },
      (a) => {
        console.warn('error', a);
      },
      () => {
        console.warn('complete');
      }
    );
  }

}
