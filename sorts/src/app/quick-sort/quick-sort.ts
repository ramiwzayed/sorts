import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class quickSort {
  quickSortArray() {
    this.array = this.quickSort(this.array);
  }
  array: number[] = [8, 3, 1, 14, 2, 5];



  quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[arr.length - 1];
    const left: number[] = [];
    const right: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [
      ...this.quickSort(left),
      pivot,
      ...this.quickSort(right)
    ];
  }
}
