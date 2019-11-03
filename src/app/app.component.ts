import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'unit-testing';
  currentNum = 0;

  increment(){
    this.currentNum ++;
  }

  decrement(){
    this.currentNum --;
  }
}
