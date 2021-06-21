import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dev-workspace-page-catalog',
  templateUrl: './page-catalog.component.html',
  styleUrls: ['./page-catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCatalogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
