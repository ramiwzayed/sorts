import { Component } from '@angular/core';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.css']
})
export class BubbleSortComponent {
  array: number[] = [52, 14, 45, 21, 87];
  BubbleSortComponent(array: number[]) {
    const num = this.array.length;
    for (let i = 0; i < num - 1; i++) {
      for (let j = 0; j < num - i - 1; j++) {
        if (this.array[j] > this.array[j + 1]) {
          let temp = this.array[j];
          this.array[j] = this.array[j + 1];
          this.array[j + 1] = temp;
        }
      }
    }
  }


}
