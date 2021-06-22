export interface Message {
  message: string;
}

export interface User {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  title: string;
  price: number;
}

export interface Currency {
  type: string;
  multiplier: number
}

export interface CurrenciesRates { [key: string]: number }

export interface RatesResponse {
  success: boolean;
  infos: { from: string; [key: string]: any };
  rates: { [key: string]: number };
}

export interface CartSettings {
  currency: string;
}
