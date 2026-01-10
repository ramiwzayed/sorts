import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './bubble-sort.css',
})
export class AppComponent implements OnInit {

  arr: number[] = [52, 14, 45, 21, 87];

  ngOnInit() {
    this.bubbleSort();
    console.log(this.arr);
  }

  bubbleSort() {
    let n = this.arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (this.arr[j] > this.arr[j + 1]) {
          let temp = this.arr[j];
          this.arr[j] = this.arr[j + 1];
          this.arr[j + 1] = temp;
        }
      }
    }
  }
}
