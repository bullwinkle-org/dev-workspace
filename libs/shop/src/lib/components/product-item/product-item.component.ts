import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@dev-workspace/api-interfaces';

@Component({
  selector: 'dev-workspace-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent {
  @Input() item?: Product = undefined;
  @Output() addToCartClick: EventEmitter<Product> = new EventEmitter<Product>();
}
