import { Component } from '@angular/core';

const ROW_HEIGHTS: { [id: number]: number } = {
  1: 400,
  3: 335,
  4: 350,
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  columnCount = 3;
  category = 'no';
  rowHeight = ROW_HEIGHTS[this.columnCount];

  onColumnsCountUpdated(columnCount: number): void {
    this.columnCount = columnCount;
    this.rowHeight = ROW_HEIGHTS[this.columnCount];
  }

  onShowCategory(category: string): void {
    this.category = category;
  }
}
