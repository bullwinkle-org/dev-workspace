import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShopApiService {

  getCurrenciesRates () {
    return this.http.get('/assets/mocks/api/rates.json', {
      withCredentials: true
    });
  }

  getCurrenciesInfo () {
    return this.http.get('/assets/mocks/api/currencies.json', {
      withCredentials: true
    });
  }

  constructor(private http: HttpClient) {
    console.warn('hi shop service');
  }
}
