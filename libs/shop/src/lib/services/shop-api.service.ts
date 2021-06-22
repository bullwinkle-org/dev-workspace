import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RatesResponse } from '@dev-workspace/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ShopApiService {

  getCurrenciesRates() {
    return this.http.get<RatesResponse>('/assets/mocks/api/rates.json?from=USD', {
      withCredentials: true
    }).pipe(map(({ rates }) => rates));
  }

  getCurrenciesInfo() {
    return this.http.get('/assets/mocks/api/currencies.json', {
      withCredentials: true
    });
  }

  getProducts() {
    return this.http.get('/assets/mocks/api/products.json', {
      withCredentials: true
    });
  }

  constructor(private http: HttpClient) {
    console.warn('hi shop service');
  }
}
