import { Component } from '@angular/core';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.css']
})
export class BubbleSortComponent {
  arr: number[] = [52, 14, 45, 21, 87];

  ngOnInit() {
    this.bubbleSort();
    console.log(this.arr);
  }

  bubbleSort() {
    const num = this.arr.length;
    for (let i = 0; i < num - 1; i++) {
      for (let j = 0; j < num - i - 1; j++) {
        if (this.arr[j] > this.arr[j + 1]) {
          let temp = this.arr[j];
          this.arr[j] = this.arr[j + 1];
          this.arr[j + 1] = temp;
        }
      }
    }
  }
}
