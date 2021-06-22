import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Product } from '@dev-workspace/api-interfaces';

@Component({
  selector: 'dev-workspace-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent implements OnInit {
  @Input() item?: Product = undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}
