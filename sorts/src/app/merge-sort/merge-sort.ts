import { Component } from '@angular/core';

@Component({
  selector: 'app-merge-sort',
  templateUrl: './merge-sort.component.html'
})
export class MergeSort {

  array: number[] = [12, 5, 1, 3, 9, 13, 6];

  mergeSortArray() {
    this.array = this.mergeSort(this.array);
  }

  mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return this.merge(
      this.mergeSort(left),
      this.mergeSort(right)
    );
  }

  merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }

    return result
      .concat(left.slice(i))
      .concat(right.slice(j));
  }
}
