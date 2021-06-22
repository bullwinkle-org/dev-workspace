import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Currency } from '@dev-workspace/api-interfaces';
import { ShopApiService } from '../../../../shop/src/lib/services/shop-api.service';
import { ShopStateService } from '../../../../shop/src/lib/services/shop-state.service';


@Component({
  selector: 'dev-workspace-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCartComponent implements OnInit, AfterViewInit {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  @ViewChild('currencySelect') currencySelect: ElementRef<HTMLSelectElement>;

  constructor(public shopState: ShopStateService) {
  }

  ngOnInit(): void {
    console.warn(this.shopState);
  }

  ngAfterViewInit(): void {
    console.warn(this.currencySelect);
  }

  onCurrencyChange(currency: string) {
    console.warn(currency);
  }
}
