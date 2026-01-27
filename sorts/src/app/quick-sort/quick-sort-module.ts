import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div>App Component</div>'
})
export class AppComponent {
  title = 'Quick Sort';
}


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class QuickSortModule { }
