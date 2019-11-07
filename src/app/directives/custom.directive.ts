import { Directive, Input, ElementRef, OnChanges } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective implements OnChanges {
  defaultColor = 'yellow';
  @Input('appCustom') bgColor: string;

  constructor(private el: ElementRef){}

  ngOnChanges(){
    this.el.nativeElement.style.backgroundColor = this.bgColor || this.defaultColor;
  }
}
