import { Component, EventEmitter, Output } from '@angular/core';

type Sort = 'desc' | 'asc';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss'],
})
export class ProductsHeaderComponent {
  @Output() changeColumnCount = new EventEmitter();

  sort: Sort = 'desc';
  itemsShowCount = 12;
  columnCount = 2;

  onSortUpdated(newSort: Sort): void {
    this.sort = newSort;
  }

  onItemsCountUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnCountUpdated(columnNumber: number): void {
    this.changeColumnCount.emit(columnNumber);
  }
}
