import { Injectable } from '@angular/core';
import { ShopStateService } from './shop-state.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private shopState: ShopStateService) { }
}
