import { Injectable } from '@angular/core';
import { CurrenciesRates, Currency, Product } from '@dev-workspace/api-interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { ShopApiService } from './shop-api.service';
import { map } from 'rxjs/operators';

export type AvailableCurrency = 'RUB' | 'EUR' | 'USD' | 'GBP' | 'JPY';
export type CartTotals = Record<AvailableCurrency, number>;

interface ShopState {
  products: Product[];
  cartItems: Product[];
  currency: AvailableCurrency;
  currencies: Currency[];
  currenciesRates: CurrenciesRates;
  availableCurrencies: AvailableCurrency[];
}

const shopStateDefault: ShopState = {
  products: [],
  cartItems: [],
  currencies: [],
  currenciesRates: {},
  currency: 'USD',
  availableCurrencies: ['RUB', 'EUR', 'USD', 'GBP', 'JPY']
};


@Injectable({
  providedIn: 'root'
})
export class ShopStateService {
  public state$: Observable<ShopState>;
  public cartTotal$: Observable<CartTotals>;

  get cartItems(): Product[] {
    return this.value.cartItems;
  }

  get currencies(): Currency[] {
    return this.value.currencies;
  }

  get currenciesRates(): CurrenciesRates {
    return this.value.currenciesRates;
  }

  get currency(): string {
    return this.value.currency;
  }

  private get value() {
    return this.stateSubject$.getValue();
  }

  private stateSubject$: BehaviorSubject<ShopState> = new BehaviorSubject({ ...shopStateDefault });

  constructor(private shopApiService: ShopApiService) {
    this.state$ = this.stateSubject$.asObservable();
    this.cartTotal$ = this.state$.pipe(
      map(({
             cartItems,
             availableCurrencies,
             currenciesRates
           }) => availableCurrencies.reduce((totals, currencyKey) => ({
        ...totals,
        [currencyKey]: +cartItems.reduce((sum, {price}) => (sum + (price * (currenciesRates[currencyKey]?? 0.5))), 0).toFixed(2)
      }), {} as CartTotals))
    );

    this.shopApiService.getCurrenciesRates().subscribe(
      (currenciesRates) => {
        console.warn('next', currenciesRates);
        this.patch({ currenciesRates });
      },
      (a) => {
        console.warn('error', a);
      },
      () => {
        console.warn('complete');
      }
    );

    this.shopApiService.getCurrenciesInfo().subscribe(
      (currencies) => {
        console.warn('next', currencies);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.patch({ currencies });
      },
      (a) => {
        console.warn('error', a);
      },
      () => {
        console.warn('complete');
      }
    );

    this.shopApiService.getProducts().subscribe(
      (products) => {
        console.warn('next', products);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.patch({ products });
      },
      (a) => {
        console.warn('error', a);
      },
      () => {
        console.warn('complete');
      }
    );
  }

  public patch(data: Partial<ShopState>) {
    this.stateSubject$.next({ ...this.value, ...data });
  }
}
