import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {throwIfEmpty} from 'rxjs';

@Component({
  selector: 'app-selection-sort',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selection-sort.component.html'
})
export class SelectionSortComponent {
  array: number[] = [64, 25, 12, 22, 11];
  i: any;

  selectionSort() {
    const num = this.array.length;

    for (let i = 0; i < num - 1; i++) {
      let minIdx = i;

      for (let j = i + 1; j < num; j++) {
        if (this.array[j] < this.array[minIdx]) {
          minIdx = j;
        }
      }

      const temp = this.array[minIdx];
      this.array[minIdx] = this.array[i];
      this.array[i] = temp;
    }
  }
}
