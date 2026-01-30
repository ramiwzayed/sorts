import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div>App Component</div>'
})
export class MergeSortComponent {
  title = 'Merge Sort';
}

@NgModule({
  declarations: [],
  imports: [
    MergeSortComponent
  ],
  // ...
})

export class MergeSortModule { }
