import { Component, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'unit-testing';
  currentNum = 0;
  form: FormGroup;
  valueChanged = new EventEmitter();

  constructor(fb: FormBuilder){
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['']
    });
  }

  increment(){
    this.currentNum ++;
  }

  decrement(){
    this.currentNum --;
  }

  emitValue(){
    this.valueChanged.emit(this.currentNum);
  }

  incrementEmitValue(){
    this.increment();
    this.emitValue();
  }
}
