import { Component } from '@angular/core';

@Component({
  selector: 'app-selection-sort',
  templateUrl: './selection-sort.component.html'
})
export class SelectionSortComponent {
  array: number[] = [64, 25, 12, 22, 11];

  selectionSort() {
    const num = this.array.length;

    for (let i = 0; i < num - 1; i++) {
      let minIdx = i;

      for (let j = i + 1; j < num; j++) {
        if (this.array[j] < this.array[minIdx]) {
          minIdx = j;
        }
      }
      let temp = this.array[minIdx];
      this.array[minIdx] = this.array[i];
      this.array[i] = temp;
    }
  }
}

export class SelectionSort {
}
